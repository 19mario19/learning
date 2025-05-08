/**
 * Enum of supported language codes.
 * @readonly
 * @enum {string}
 */
const lang = {
  ru: "ru",
  ua: "ua",
  sp: "sp",
}

/**
 * @typedef {'ru' | 'ua' | 'sp'} lang
 */

/**
 * Returns getter and setter for managing a language state.
 *
 * @returns {[() => lang, (lang) => void]}
 */
function LanguageManager() {
  const value = { state: lang.ru }

  return {
    get value() {
      return value.state
    },
    set value(/** @type {lang} */ newState) {
      value.state = newState
    },
  }
}

export { LanguageManager, lang }
