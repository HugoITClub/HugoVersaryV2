import { IntlProvider } from "react-intl";
import { shallowEqual, useSelector } from "react-redux";
import messagesCategory from "./messagesCategory";

export function LanguageProvider({ children }) {
  const locale = useSelector((state) => state.language.locale, shallowEqual);

  return (
    <IntlProvider locale={locale} key={locale} messages={messagesCategory[locale]}>
      {children}
    </IntlProvider>
  );
}
