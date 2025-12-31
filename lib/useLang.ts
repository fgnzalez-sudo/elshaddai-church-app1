"use client";

import { useEffect, useState } from "react";
import type { Lang } from "./i18n";

export function useLang() {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved) setLang(saved);
  }, []);

  function changeLang(l: Lang) {
    localStorage.setItem("lang", l);
    setLang(l);
  }

  return { lang, changeLang };
}
