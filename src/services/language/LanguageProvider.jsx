import { IntlProvider } from "react-intl";
import { shallowEqual, useSelector } from "react-redux";

export function LanguageProvider({ messages = [], children }) {
  const locale = useSelector((state) => state.language.locale, shallowEqual);

  return (
    <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
}
