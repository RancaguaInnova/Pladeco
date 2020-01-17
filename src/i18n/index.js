import spanishMessages from 'aor-language-spanish'
import polyglotI18nProvider from 'ra-i18n-polyglot';

const messages = {
  es: spanishMessages
}
const i18nProvider = polyglotI18nProvider(locale => messages[locale]);
export default i18nProvider