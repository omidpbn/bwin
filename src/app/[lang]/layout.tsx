import { ReactNode } from "react";
import type { Metadata } from "next";
import ToastProvider from "../../shared/components/atoms/toastProvider";
import Header from "../../shared/components/organisms/header";
import "../globals.css";
import I18nProvider from "../../shared/components/atoms/I18nProvider";
import Footer from "../../shared/components/organisms/footer";

export const metadata: Metadata = {
  title: "bwin",
  description: "سایت شرط بندی",
};

interface RootLayoutProps {
  children: ReactNode;
  params: Promise<{ [key: string]: string }>;
}

const RootLayout = async ({ children, params }: RootLayoutProps) => {
  const { lang } = await params;
  const dir = lang === "fa" ? "rtl" : "ltr";
  return (
    <html lang={lang} dir={dir} className="dark">
      <body className="bg-white text-black dark:bg-slate-800 dark:text-white">
        <I18nProvider lang={lang}>
          <main>
            <Header />
            {children}
            <Footer />
          </main>
          <ToastProvider />
        </I18nProvider>
      </body>
    </html>
  );
};

export default RootLayout;
