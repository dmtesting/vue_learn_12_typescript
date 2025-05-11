let currentLang = "ru";

export default {
  install(app, options) {
    app.config.globalProperties.$i18n = (key) => {
      const keyChain = key.split(".");

      return keyChain.reduce((acc, key) => {
        return acc[key] ?? "== UNKNOWN ==";
      }, options[currentLang]);
    };

    app.provide("changeI18N", (lang) => {
      currentLang = lang;
    });
  },
};
