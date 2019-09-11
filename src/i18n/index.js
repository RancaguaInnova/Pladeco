import spanishMessages from 'aor-language-spanish'

const messages = {
  es: spanishMessages
}
const i18nProvider = locale => messages[locale]
export default i18nProvider
