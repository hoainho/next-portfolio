// hooks/useHeadings.ts
import { useEffect, useState } from "react";

interface TOCItem {
  id: string;
  text: string;
}

export function useHeadings(): TOCItem[] {
  const [headings, setHeadings] = useState<TOCItem[]>([]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2"));
    const tocItems = elements.map((el) => ({
      id: el.id,
      text: el.innerText,
    }));
    setHeadings(tocItems);
  }, []);

  return headings;
}
