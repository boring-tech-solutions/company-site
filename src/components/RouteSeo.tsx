import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getRouteSeo } from "@/lib/routeSeo";

function setMeta(selector: string, attr: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);
  if (!el) {
    const tag = selector.startsWith("link") ? "link" : "meta";
    el = document.createElement(tag) as HTMLMetaElement | HTMLLinkElement;
    const [, attrName, attrValue] = selector.match(/\[([^\]="]+)="([^"]+)"\]/) ?? [];
    if (attrName && attrValue) {
      el.setAttribute(attrName, attrValue);
    }
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

export default function RouteSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = getRouteSeo(pathname);

    document.title = seo.title;
    setMeta('meta[name="description"]', "content", seo.description);
    setMeta('link[rel="canonical"]', "href", seo.url);
    setMeta('meta[property="og:title"]', "content", seo.title);
    setMeta('meta[property="og:description"]', "content", seo.description);
    setMeta('meta[property="og:url"]', "content", seo.url);
    setMeta('meta[name="twitter:title"]', "content", seo.title);
    setMeta('meta[name="twitter:description"]', "content", seo.description);
    setMeta('meta[name="twitter:url"]', "content", seo.url);
  }, [pathname]);

  return null;
}
