"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import i18n from "../../../../../i18n";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLang, setCurrentLang] = useState<"fa" | "en">("fa");

  useEffect(() => {
    const match = pathname.match(/^\/(fa|en)/);
    const lang = match ? (match[1] as "fa" | "en") : "fa";

    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [pathname]);

  const toggleLanguage = () => {
    const newLang = currentLang === "fa" ? "en" : "fa";
    const cleanPath = pathname.replace(/^\/(fa|en)/, "");
    const newPath = `/${newLang}${cleanPath}`;
    router.push(newPath);
    i18n.changeLanguage(newLang);
    setCurrentLang(newLang);
  };

  return <button onClick={toggleLanguage}>{currentLang.toUpperCase()}</button>;
}
