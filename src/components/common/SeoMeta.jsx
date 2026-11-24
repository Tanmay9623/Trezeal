import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import { articles } from "../../data/articles.js";
import { faqItems } from "../../data/faqItems.js";
import { defaultSeo, seoByPath, siteUrl } from "../../data/seo.js";
import { capabilities } from "../home/capabilitiesData.js";

function setMetaTag(attribute, value, content) {
  let element = document.head.querySelector(`meta[${attribute}="${value}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function setCanonicalUrl(url) {
  let element = document.head.querySelector('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", url);
}

function setJsonLd(id, data) {
  let element = document.getElementById(id);

  if (!element) {
    element = document.createElement("script");
    element.id = id;
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
}

export default function SeoMeta() {
  const { pathname } = useLocation();
  const previousPath = useRef(pathname);

  useEffect(() => {
    const article = articles.find(
      (item) => pathname === `/resources/${item.slug}`,
    );
    const seo = article
      ? {
          title: `${article.title} | Trezeal Resources`,
          description: article.description,
        }
      : seoByPath[pathname] ||
        (pathname === "/"
          ? defaultSeo
          : {
              title: "Page not found | Trezeal",
              description:
                "The page you requested could not be found. Explore Trezeal services, resources or contact the team.",
            });
    const canonicalPath = article
      ? `/blog/${article.slug}`
      : pathname === "/resources"
        ? "/blog"
        : pathname;
    const pageUrl = `${siteUrl}${canonicalPath === "/" ? "" : canonicalPath}`;
    const socialImage = `${siteUrl}/og-image.svg`;

    if (previousPath.current !== pathname && window.gtag) {
      window.gtag("event", "page_view", {
        page_path: pathname,
        page_title: seo.title,
      });
    }
    previousPath.current = pathname;

    document.title = seo.title;
    setMetaTag("name", "description", seo.description);
    setMetaTag("property", "og:title", seo.title);
    setMetaTag("property", "og:description", seo.description);
    setMetaTag("property", "og:type", article ? "article" : "website");
    setMetaTag("property", "og:url", pageUrl);
    setMetaTag("property", "og:image", socialImage);
    setMetaTag("property", "og:image:secure_url", socialImage);
    setMetaTag("property", "og:image:type", "image/svg+xml");
    setMetaTag("property", "og:image:width", "1200");
    setMetaTag("property", "og:image:height", "630");
    setMetaTag("property", "og:locale", "en_IN");
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", seo.title);
    setMetaTag("name", "twitter:description", seo.description);
    setMetaTag("name", "twitter:image", socialImage);
    setCanonicalUrl(pageUrl);

    setJsonLd("trezeal-organization-schema", {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Trezeal",
      url: siteUrl,
      logo: `${siteUrl}/brand-mark.svg`,
      email: "hello@trezeal.com",
      description:
        "AI solutions, workflow automation, responsive website design, custom software, reporting dashboards, digital project support, and career preparation.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services offered",
        itemListElement: capabilities.map(({ title }) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: title,
          },
        })),
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
    });

    if (pathname === "/faq" || pathname === "/") {
      const visibleFaqItems =
        pathname === "/" ? faqItems.slice(0, 10) : faqItems;
      setJsonLd("trezeal-faq-schema", {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: visibleFaqItems.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: {
            "@type": "Answer",
            text: answer,
          },
        })),
      });
    } else {
      document.getElementById("trezeal-faq-schema")?.remove();
    }

    const breadcrumbSegments = canonicalPath.split("/").filter(Boolean);
    const breadcrumbItems = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
    ];
    let currentPath = "";

    breadcrumbSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isArticle = article && index === breadcrumbSegments.length - 1;
      const segmentSeo = seoByPath[currentPath];
      const name = isArticle
        ? article.title
        : segmentSeo?.title.split("|")[0].trim() ??
          segment.replaceAll("-", " ");

      breadcrumbItems.push({
        "@type": "ListItem",
        position: breadcrumbItems.length + 1,
        name: name.charAt(0).toUpperCase() + name.slice(1),
        item: `${siteUrl}${currentPath}`,
      });
    });

    setJsonLd("trezeal-breadcrumb-schema", {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems,
    });

    if (article) {
      setJsonLd("trezeal-article-schema", {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.description,
        image: socialImage,
        mainEntityOfPage: pageUrl,
        publisher: {
          "@type": "Organization",
          name: "Trezeal",
          url: siteUrl,
        },
      });
    } else {
      document.getElementById("trezeal-article-schema")?.remove();
    }
  }, [pathname]);

  return null;
}
