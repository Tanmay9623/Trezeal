import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import { blogPresentation } from "../../data/blogPresentation.js";
import { findJob, openJobs } from "../../data/jobs.js";
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
    const articleSlug = pathname.startsWith("/blog/")
      ? pathname.slice("/blog/".length)
      : pathname.startsWith("/resources/")
        ? pathname.slice("/resources/".length)
        : "";
    const articlePresentation = blogPresentation[articleSlug];
    const isArticle = Boolean(articlePresentation);
    const applicationPage = pathname.startsWith("/careers/apply/");
    const jobSlug = pathname.startsWith("/careers/")
      ? pathname.slice("/careers/".length)
      : "";
    const careerJob =
      !applicationPage && jobSlug && !jobSlug.includes("/")
        ? findJob(jobSlug)
        : undefined;
    const seo = isArticle
      ? {
          title: `${articlePresentation.title} | Trezeal Journal`,
          description: articlePresentation.description,
        }
      : careerJob
        ? {
            title: `${careerJob.title} | Careers at Trezeal`,
            description: careerJob.summary,
          }
        : applicationPage
          ? {
              title: "Candidate Application | Careers at Trezeal",
              description:
                "Send a career application to the Trezeal careers team.",
            }
      : seoByPath[pathname] ||
        (pathname === "/"
          ? defaultSeo
          : {
              title: "Page not found | Trezeal",
              description:
                "The page you requested could not be found. Explore Trezeal services, resources or contact the team.",
            });
    const canonicalPath = isArticle
      ? `/blog/${articleSlug}`
      : pathname === "/resources"
        ? "/blog"
        : pathname;
    const pageUrl = `${siteUrl}${canonicalPath === "/" ? "" : canonicalPath}`;
    const socialImage = isArticle
      ? `${siteUrl}${articlePresentation.coverImage}`
      : `${siteUrl}/og-image.svg`;

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
    setMetaTag("property", "og:type", isArticle ? "article" : "website");
    setMetaTag("property", "og:url", pageUrl);
    setMetaTag("property", "og:image", socialImage);
    setMetaTag("property", "og:image:secure_url", socialImage);
    setMetaTag(
      "property",
      "og:image:type",
      isArticle ? "image/jpeg" : "image/svg+xml",
    );
    if (isArticle) {
      document.head
        .querySelector('meta[property="og:image:width"]')
        ?.remove();
      document.head
        .querySelector('meta[property="og:image:height"]')
        ?.remove();
    } else {
      setMetaTag("property", "og:image:width", "1200");
      setMetaTag("property", "og:image:height", "630");
    }
    setMetaTag("property", "og:locale", "en_IN");
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", seo.title);
    setMetaTag("name", "twitter:description", seo.description);
    setMetaTag("name", "twitter:image", socialImage);
    setCanonicalUrl(pageUrl);
    if (applicationPage || careerJob?.demo) {
      setMetaTag("name", "robots", "noindex,nofollow");
    } else {
      document.head.querySelector('meta[name="robots"]')?.remove();
    }

    setJsonLd("trezeal-organization-schema", {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Trezeal",
      url: siteUrl,
      logo: `${siteUrl}/brand-mark.svg`,
      email: "info@trezeal.com",
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
      const isArticleSegment =
        isArticle && index === breadcrumbSegments.length - 1;
      const segmentSeo = seoByPath[currentPath];
      const name = isArticleSegment
        ? articlePresentation.title
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

    if (isArticle) {
      setJsonLd("trezeal-article-schema", {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: articlePresentation.title,
        description: articlePresentation.description,
        image: socialImage,
        mainEntityOfPage: pageUrl,
        author: {
          "@type": "Organization",
          name: articlePresentation.author,
        },
        ...(articlePresentation.publishedAt
          ? { datePublished: articlePresentation.publishedAt }
          : {}),
        publisher: {
          "@type": "Organization",
          name: "Trezeal",
          url: siteUrl,
        },
      });
    } else {
      document.getElementById("trezeal-article-schema")?.remove();
    }

    const publishedJob =
      careerJob && openJobs.find((job) => job.slug === careerJob.slug);
    if (publishedJob) {
      setJsonLd("trezeal-job-schema", {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        title: publishedJob.title,
        description: publishedJob.summary,
        datePosted: publishedJob.postedDate,
        validThrough: publishedJob.deadline,
        employmentType: publishedJob.employmentType.toUpperCase(),
        hiringOrganization: {
          "@type": "Organization",
          name: "Trezeal",
          sameAs: siteUrl,
          logo: `${siteUrl}/brand-mark.svg`,
        },
        jobLocationType: publishedJob.location === "Remote" ? "TELECOMMUTE" : undefined,
      });
    } else {
      document.getElementById("trezeal-job-schema")?.remove();
    }
  }, [pathname]);

  return null;
}
