import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import fa from "./public/locales/fa/common.json";
import en from "./public/locales/en/common.json";

i18n.use(initReactI18next).init({
  resources: { en: { common: en }, fa: { common: fa } },
  lng: "fa",
  fallbackLng: "fa",
  interpolation: { escapeValue: false },
});

export default i18n;
