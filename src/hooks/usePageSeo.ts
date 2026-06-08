import { useEffect } from "react";

type SeoConfig = {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType?: string;
};

function syncTag(selector: string, attributes: Record<string, string>) {
  const existing = document.head.querySelector(selector) as HTMLElement | null;
  const element = existing ?? document.createElement(selector.startsWith("link") ? "link" : "meta");
  const created = !existing;
  const previousAttributes = Object.keys(attributes).map((name) => [name, element.getAttribute(name)]);

  if (created) {
    document.head.appendChild(element);
  }

  for (const [name, value] of Object.entries(attributes)) {
    element.setAttribute(name, value);
  }

  return (): void => {
    if (created) {
      element.remove();
      return;
    }

    for (const [name, previousValue] of previousAttributes) {
      if (previousValue === null) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, previousValue);
      }
    }
  };
}

export function usePageSeo({ title, description, canonicalUrl, ogType = "website" }: SeoConfig) {
  useEffect(() => {
    const previousTitle = document.title;
    const cleanups: Array<() => void> = [];

    document.title = title;
    cleanups.push(syncTag('meta[name="description"]', { name: "description", content: description }));
    cleanups.push(syncTag('link[rel="canonical"]', { rel: "canonical", href: canonicalUrl }));
    cleanups.push(syncTag('meta[property="og:title"]', { property: "og:title", content: title }));
    cleanups.push(
      syncTag('meta[property="og:description"]', {
        property: "og:description",
        content: description,
      }),
    );
    cleanups.push(syncTag('meta[property="og:type"]', { property: "og:type", content: ogType }));
    cleanups.push(syncTag('meta[property="og:url"]', { property: "og:url", content: canonicalUrl }));
    cleanups.push(syncTag('meta[name="twitter:title"]', { name: "twitter:title", content: title }));
    cleanups.push(
      syncTag('meta[name="twitter:description"]', {
        name: "twitter:description",
        content: description,
      }),
    );
    cleanups.push(syncTag('meta[name="twitter:url"]', { name: "twitter:url", content: canonicalUrl }));

    return () => {
      document.title = previousTitle;
      cleanups.reverse().forEach((cleanup) => cleanup());
    };
  }, [canonicalUrl, description, ogType, title]);
}
