"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

const Sidebar = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="w-full lg:min-h-[720px] flex lg:flex-col max-sm:items-center gap-4 bg-slate-200 dark:bg-slate-700 rounded px-4 py-2">
        <Link href="#" className="text-sm font-normal px-4 py-2 hover:bg-slate-600 hover:rounded">
          {t("Football")}
        </Link>

        <Link href="#" className="text-sm font-normal px-4 py-2 hover:bg-slate-600 hover:rounded">
          {t("Basketball")}
        </Link>

        <Link href="#" className="text-sm font-normal px-4 py-2 hover:bg-slate-600 hover:rounded">
          {t("Tennis")}
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
