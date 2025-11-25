"use client";

import { ReactNode, useEffect } from "react";
import i18n from "../../../../../i18n";

export default function I18nProvider({ children, lang }: { children: ReactNode; lang: string }) {
  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  return <>{children}</>;
}
