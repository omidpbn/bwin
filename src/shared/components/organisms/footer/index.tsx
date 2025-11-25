"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <footer className="grid grid-cols-12 gap-4 bg-slate-600 px-4 py-10">
        <div className="md:col-span-4 col-span-12">
          <p className="text-x1 font-bold pb-2">{t("About_us")}</p>

          <div className="flex items-center gap-4">
            <Link href="#" className="text-xs font-normal text-black dark:text-white hover:underline">
              {t("Privacy_Notice")}
            </Link>
            <Link href="#" className="text-xs font-normal text-black dark:text-white hover:underline">
              {t("Manage_Cookies")}
            </Link>
          </div>

          <Link href="#" className="text-xs font-normal text-black dark:text-white hover:underline">
            {t("General_Terms_and_Conditions")}
          </Link>

          <div className="flex items-center gap-4">
            <Link href="#" className="text-xs font-normal text-black dark:text-white hover:underline">
              {t("Help_and_Contact")}
            </Link>
            <Link href="#" className="text-xs font-normal text-black dark:text-white hover:underline">
              {t("Sitemap")}
            </Link>
          </div>
        </div>

        <div className="md:col-span-4 col-span-12">
          <p className="text-x1 font-bold pb-2">{t("About_us")}</p>

          <div className="flex items-center gap-4">
            <Link href="#" className="text-xs font-normal text-black dark:text-white hover:underline">
              {t("Privacy_Notice")}
            </Link>
            <Link href="#" className="text-xs font-normal text-black dark:text-white hover:underline">
              {t("Manage_Cookies")}
            </Link>
          </div>

          <Link href="#" className="text-xs font-normal text-black dark:text-white hover:underline">
            {t("General_Terms_and_Conditions")}
          </Link>

          <div className="flex items-center gap-4">
            <Link href="#" className="text-xs font-normal text-black dark:text-white hover:underline">
              {t("Help_and_Contact")}
            </Link>
            <Link href="#" className="text-xs font-normal text-black dark:text-white hover:underline">
              {t("Sitemap")}
            </Link>
          </div>
        </div>

        <div className="md:col-span-4 col-span-12">
          <p className="text-x1 font-bold pb-2">{t("About_us")}</p>

          <div className="flex items-center gap-4">
            <Link href="#" className="text-xs font-normal text-black dark:text-white hover:underline">
              {t("Privacy_Notice")}
            </Link>
            <Link href="#" className="text-xs font-normal text-black dark:text-white hover:underline">
              {t("Manage_Cookies")}
            </Link>
          </div>

          <Link href="#" className="text-xs font-normal text-black dark:text-white hover:underline">
            {t("General_Terms_and_Conditions")}
          </Link>

          <div className="flex items-center gap-4">
            <Link href="#" className="text-xs font-normal text-black dark:text-white hover:underline">
              {t("Help_and_Contact")}
            </Link>
            <Link href="#" className="text-xs font-normal text-black dark:text-white hover:underline">
              {t("Sitemap")}
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
