import { useEffect } from "react";

interface PageSeoProps {
  title: string;
  description: string;
  canonicalUrl: string;
}

const upsertTag = (
  selector: string,
  tagName: "meta" | "link",
  attributes: Record<string, string>,
) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement(tagName);
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element?.setAttribute(key, value);
  });
};

const PageSeo = ({ title, description, canonicalUrl }: PageSeoProps) => {
  useEffect(() => {
    document.title = title;

    upsertTag('meta[name="description"]', "meta", {
      name: "description",
      content: description,
    });
    upsertTag('link[rel="canonical"]', "link", {
      rel: "canonical",
      href: canonicalUrl,
    });
    upsertTag('meta[property="og:title"]', "meta", {
      property: "og:title",
      content: title,
    });
    upsertTag('meta[property="og:description"]', "meta", {
      property: "og:description",
      content: description,
    });
    upsertTag('meta[property="og:url"]', "meta", {
      property: "og:url",
      content: canonicalUrl,
    });
    upsertTag('meta[name="twitter:title"]', "meta", {
      name: "twitter:title",
      content: title,
    });
    upsertTag('meta[name="twitter:description"]', "meta", {
      name: "twitter:description",
      content: description,
    });
    upsertTag('meta[name="twitter:url"]', "meta", {
      name: "twitter:url",
      content: canonicalUrl,
    });
  }, [canonicalUrl, description, title]);

  return null;
};

export default PageSeo;
