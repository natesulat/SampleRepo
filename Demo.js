const translator = require('@boost/translate');
const locale = process.argv[2] || 'en';
const t = translator.createTranslator(['default'], __dirname + '/language', {
    locale,
    fallbackLocale: [locale.split('-')[0], 'dev'],
    resourceFormat: 'json',
    autoDetect: false
});
console.log(`Locale is ${t.locale}`)

const messageMap = {
    KEY: "key",
    ONLY_EN: "onlyEN",
    ONLY_US: "onlyUS",
    OVERRIDE: "overrideDev"
}

for (let k in messageMap) {
    messageMap[k] = t(messageMap[k]);
}

console.log(JSON.stringify(messageMap));