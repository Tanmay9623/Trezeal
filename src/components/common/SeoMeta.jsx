import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { defaultSeo, seoByPath, siteUrl } from "../../data/seo.js";

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

export default function SeoMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = seoByPath[pathname] || defaultSeo;
    const pageUrl = `${siteUrl}${pathname === "/" ? "" : pathname}`;

    document.title = seo.title;
    setMetaTag("name", "description", seo.description);
    setMetaTag("property", "og:title", seo.title);
    setMetaTag("property", "og:description", seo.description);
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:url", pageUrl);
    setMetaTag("name", "twitter:card", "summary");
    setMetaTag("name", "twitter:title", seo.title);
    setMetaTag("name", "twitter:description", seo.description);
    setCanonicalUrl(pageUrl);
  }, [pathname]);

  return null;
}
