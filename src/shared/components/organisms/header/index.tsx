"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import ThemeSwitcher from "../../atoms/themeSwitcher";
import LanguageSwitcher from "../../atoms/languageSwitcher";

const Header = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <header className="flex items-center justify-between bg-slate-600 text-white p-4">
        <div className="flex items-center md:gap-4 gap-1">
          <h1 className="md:text-xl text-lg font-bold">Bwin</h1>

          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm font-normal">
              {t("Football")}
            </Link>

            <Link href="#" className="text-sm font-normal">
              {t("Basketball")}
            </Link>

            <Link href="#" className="text-sm font-normal">
              {t("Tennis")}
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </header>
    </>
  );
};

export default Header;
