import { useEffect } from "react";

export function useJsonLd(id: string, schema: Record<string, unknown> | null | undefined) {
  useEffect(() => {
    if (!schema) {
      return;
    }

    const existing = document.head.querySelector(`script#${id}`) as HTMLScriptElement | null;
    const script = existing ?? document.createElement("script");

    script.id = id;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);

    if (!existing) {
      document.head.appendChild(script);
    }

    return () => {
      script.remove();
    };
  }, [id, schema]);
}
