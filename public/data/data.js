/**
 * Enum of supported language codes.
 * @readonly
 * @enum {string}
 */
const lang = {
  ro: "ro",
  ru: "ru",
  ua: "ua",
  es: "es",
  bg: "bg",
  hi: "hi",
}

const categories = {
  all: {
    name: "all",
    translation: {
      [lang.ro]: "toate cuvintele 📚",
      [lang.ru]: "все слова 📚",
      [lang.ua]: "усі слова 📚",
      [lang.es]: "todas las palabras 📚",
      [lang.bg]: "всички думи 📚",
      [lang.hi]: "सभी शब्द 📚",
    },
  },
  bathroom: {
    name: "bathroom",
    translation: {
      [lang.ro]: "baie 🛁",
      [lang.ru]: "ванная 🛁",
      [lang.ua]: "ванна кімната 🛁",
      [lang.es]: "baño 🛁",
      [lang.bg]: "баня 🛁",
      [lang.hi]: "बाथरूम 🛁",
    },
  },
  bedroom: {
    name: "bedroom",
    translation: {
      [lang.ro]: "dormitor 🛌",
      [lang.ru]: "спальня 🛌",
      [lang.ua]: "спальня 🛌",
      [lang.es]: "dormitorio 🛌",
      [lang.bg]: "спалня 🛌",
      [lang.hi]: "शयनकक्ष 🛌",
    },
  },
  supplies: {
    name: "supplies",
    translation: {
      [lang.ro]: "consumabile 🧴",
      [lang.ru]: "расходные материалы 🧴",
      [lang.ua]: "витратні матеріали 🧴",
      [lang.es]: "suministros 🧴",
      [lang.bg]: "консумативи 🧴",
      [lang.hi]: "आपूर्ति 🧴",
    },
  },
  cleaning: {
    name: "cleaning",
    translation: {
      [lang.ro]: "curățenie 🧼",
      [lang.ru]: "уборка 🧼",
      [lang.ua]: "прибирання 🧼",
      [lang.es]: "limpieza 🧼",
      [lang.bg]: "почистване 🧼",
      [lang.hi]: "सफाई 🧼",
    },
  },
  requests: {
    name: "requests",
    translation: {
      [lang.ro]: "cereri 🗣️",
      [lang.ru]: "запросы 🗣️",
      [lang.ua]: "запити 🗣️",
      [lang.es]: "solicitudes 🗣️",
      [lang.bg]: "заявки 🗣️",
      [lang.hi]: "अनुरोध 🗣️",
    },
  },
}
const testData = {
  list: [
    // Bathroom items
    {
      id: 0,
      name: "towel",
      categories: [categories.bathroom, categories.supplies],
      translation: {
        [lang.ro]: {
          name: "prosop 🧖‍♀️",
          transcription: "to-el",
        },
        [lang.ru]: {
          name: "полотенце 🧖‍♀️",
          transcription: "ТАУ-эл",
        },
        [lang.ua]: {
          name: "рушник 🧖‍♀️",
          transcription: "ТАУ-ел",
        },
        [lang.es]: {
          name: "toalla 🧖‍♀️",
          transcription: "TAU-el",
        },
        [lang.bg]: {
          name: "хавлия 🧖‍♀️",
          transcription: "ТАУ-ел",
        },
        [lang.hi]: {
          name: "तौलिया 🧖‍♀️",
          transcription: "टा-उल",
        },
      },
    },
    {
      id: 1,
      name: "hand towel",
      categories: [categories.bathroom, categories.supplies],
      translation: {
        [lang.ro]: {
          name: "prosop de mâini ✋",
          transcription: "hand ta-uăl",
        },
        [lang.ru]: {
          name: "полотенце для рук ✋",
          transcription: "хэнд ТАУ-эл",
        },
        [lang.ua]: {
          name: "рушник для рук ✋",
          transcription: "хенд ТАУ-ел",
        },
        [lang.es]: {
          name: "toalla de mano ✋",
          transcription: "hand TAU-el",
        },
        [lang.bg]: {
          name: "кърпа за ръце ✋",
          transcription: "хенд ТАУ-ел",
        },
        [lang.hi]: {
          name: "हाथ तौलिया ✋",
          transcription: "हैंड टा-उल",
        },
      },
    },
    {
      id: 2,
      name: "bath mat",
      categories: [categories.bathroom, categories.supplies],
      translation: {
        [lang.ro]: {
          name: "covoraș de baie 👣",
          transcription: "bath mat",
        },
        [lang.ru]: {
          name: "коврик для ванной 👣",
          transcription: "бас мат",
        },
        [lang.ua]: {
          name: "килимок для ванної 👣",
          transcription: "бас мат",
        },
        [lang.es]: {
          name: "alfombra de baño 👣",
          transcription: "bath mat",
        },
        [lang.bg]: {
          name: "подложка за баня 👣",
          transcription: "бас мат",
        },
        [lang.hi]: {
          name: "बाथ मैट 👣",
          transcription: "बाथ मैट",
        },
      },
    },
    {
      id: 3,
      name: "toilet paper",
      categories: [categories.bathroom, categories.supplies],
      translation: {
        [lang.ro]: {
          name: "hârtie igienică 🧻",
          transcription: "toi-let pei-păr",
        },
        [lang.ru]: {
          name: "туалетная бумага 🧻",
          transcription: "той-лет ПЕЙ-пэр",
        },
        [lang.ua]: {
          name: "туалетний папір 🧻",
          transcription: "той-лет ПЕЙ-пер",
        },
        [lang.es]: {
          name: "papel higiénico 🧻",
          transcription: "toi-let pei-per",
        },
        [lang.bg]: {
          name: "тоалетна хартия 🧻",
          transcription: "той-лет ПЕЙ-пър",
        },
        [lang.hi]: {
          name: "टॉयलेट पेपर 🧻",
          transcription: "टॉयलेट पेपर",
        },
      },
    },
    {
      id: 4,
      name: "shower",
      categories: [categories.bathroom, categories.cleaning],
      translation: {
        [lang.ro]: {
          name: "duș 🚿",
          transcription: "shau-ăr",
        },
        [lang.ru]: {
          name: "душ 🚿",
          transcription: "ШАУ-эр",
        },
        [lang.ua]: {
          name: "душ 🚿",
          transcription: "ШАУ-ер",
        },
        [lang.es]: {
          name: "ducha 🚿",
          transcription: "SHA-u-er",
        },
        [lang.bg]: {
          name: "душ 🚿",
          transcription: "ШАУ-ър",
        },
        [lang.hi]: {
          name: "शॉवर 🚿",
          transcription: "शावर",
        },
      },
    },
    {
      id: 5,
      name: "bathtub",
      categories: [categories.bathroom, categories.cleaning],
      translation: {
        [lang.ro]: {
          name: "cadă 🛀",
          transcription: "bath-tab",
        },
        [lang.ru]: {
          name: "ванна 🛀",
          transcription: "БАС-таб",
        },
        [lang.ua]: {
          name: "ванна 🛀",
          transcription: "БАС-таб",
        },
        [lang.es]: {
          name: "bañera 🛀",
          transcription: "bath-tab",
        },
        [lang.bg]: {
          name: "вана 🛀",
          transcription: "бас-таб",
        },
        [lang.hi]: {
          name: "बाथटब 🛀",
          transcription: "बाथटब",
        },
      },
    },
    {
      id: 6,
      name: "toilet",
      categories: [categories.bathroom, categories.cleaning],
      translation: {
        [lang.ro]: {
          name: "toaletă 🚽",
          transcription: "toi-let",
        },
        [lang.ru]: {
          name: "туалет 🚽",
          transcription: "ТУА-лет",
        },
        [lang.ua]: {
          name: "туалет 🚽",
          transcription: "ТУА-лет",
        },
        [lang.es]: {
          name: "inodoro 🚽",
          transcription: "TOI-let",
        },
        [lang.bg]: {
          name: "тоалетна 🚽",
          transcription: "той-лет",
        },
        [lang.hi]: {
          name: "शौचालय 🚽",
          transcription: "टॉयलेट",
        },
      },
    },
    {
      id: 7,
      name: "sink",
      categories: [categories.bathroom, categories.cleaning],
      translation: {
        [lang.ro]: {
          name: "chiuvetă 🧼",
          transcription: "sink",
        },
        [lang.ru]: {
          name: "раковина 🧼",
          transcription: "синк",
        },
        [lang.ua]: {
          name: "раковина 🧼",
          transcription: "синк",
        },
        [lang.es]: {
          name: "lavabo 🧼",
          transcription: "sink",
        },
        [lang.bg]: {
          name: "мивка 🧼",
          transcription: "синк",
        },
        [lang.hi]: {
          name: "सिंक 🧼",
          transcription: "सिंक",
        },
      },
    },
    {
      id: 8,
      name: "shampoo",
      categories: [categories.bathroom, categories.supplies],
      translation: {
        [lang.ro]: {
          name: "șampon 🧴",
          transcription: "sham-pu",
        },
        [lang.ru]: {
          name: "шампунь 🧴",
          transcription: "шам-пу",
        },
        [lang.ua]: {
          name: "шампунь 🧴",
          transcription: "шам-пу",
        },
        [lang.es]: {
          name: "champú 🧴",
          transcription: "cham-pu",
        },
        [lang.bg]: {
          name: "шампоан 🧴",
          transcription: "шам-по-ан",
        },
        [lang.hi]: {
          name: "शैम्पू 🧴",
          transcription: "शैम्पू",
        },
      },
    },
    {
      id: 9,
      name: "conditioner",
      categories: [categories.bathroom, categories.supplies],
      translation: {
        [lang.ro]: {
          name: "balsam de păr 🧴",
          transcription: "con-di-shuh-năr",
        },
        [lang.ru]: {
          name: "кондиционер для волос 🧴",
          transcription: "кон-ди-цио-нэр",
        },
        [lang.ua]: {
          name: "кондиціонер для волосся 🧴",
          transcription: "кон-ди-ціо-нэр",
        },
        [lang.es]: {
          name: "acondicionador 🧴",
          transcription: "a-con-di-sio-nei-r",
        },
        [lang.bg]: {
          name: "балсам за коса 🧴",
          transcription: "кон-ди-цио-нър",
        },
        [lang.hi]: {
          name: "कंडीशनर 🧴",
          transcription: "कंडीशनर",
        },
      },
    },
    {
      id: 10,
      name: "body wash",
      categories: [categories.bathroom, categories.supplies],
      translation: {
        [lang.ro]: {
          name: "gel de duș 🧴",
          transcription: "bo-di wosh",
        },
        [lang.ru]: {
          name: "гель для душа 🧴",
          transcription: "БО-ди ВОШ",
        },
        [lang.ua]: {
          name: "гель для душу 🧴",
          transcription: "БО-ді ВОШ",
        },
        [lang.es]: {
          name: "gel de ducha 🧴",
          transcription: "BO-di wosh",
        },
        [lang.bg]: {
          name: "душ гел 🧴",
          transcription: "БО-ди уош",
        },
        [lang.hi]: {
          name: "बॉडी वॉश 🧴",
          transcription: "बॉडी वॉश",
        },
      },
    },
    {
      id: 11,
      name: "soap",
      categories: [categories.bathroom, categories.supplies],
      translation: {
        [lang.ro]: {
          name: "săpun 🧼",
          transcription: "sop",
        },
        [lang.ru]: {
          name: "мыло 🧼",
          transcription: "соуп",
        },
        [lang.ua]: {
          name: "мило 🧼",
          transcription: "соуп",
        },
        [lang.es]: {
          name: "jabón 🧼",
          transcription: "sop",
        },
        [lang.bg]: {
          name: "сапун 🧼",
          transcription: "соуп",
        },
        [lang.hi]: {
          name: "साबुन 🧼",
          transcription: "सोप",
        },
      },
    },
    {
      id: 12,
      name: "hairdryer",
      categories: [categories.bathroom],
      translation: {
        [lang.ro]: {
          name: "uscător de păr 💨",
          transcription: "hair-dry-ăr",
        },
        [lang.ru]: {
          name: "фен 💨",
          transcription: "хэа-драй-эр",
        },
        [lang.ua]: {
          name: "фен 💨",
          transcription: "хэа-драй-ер",
        },
        [lang.es]: {
          name: "secador de pelo 💨",
          transcription: "hair-dry-er",
        },
        [lang.bg]: {
          name: "сешоар 💨",
          transcription: "хэа-драй-ър",
        },
        [lang.hi]: {
          name: "हेयर ड्रायर 💨",
          transcription: "हेयर ड्रायर",
        },
      },
    },
    {
      id: 13,
      name: "bed",
      categories: [categories.bedroom, categories.cleaning],
      translation: {
        [lang.ro]: {
          name: "pat 🛏️",
          transcription: "bed",
        },
        [lang.ru]: {
          name: "кровать 🛏️",
          transcription: "бэд",
        },
        [lang.ua]: {
          name: "ліжко 🛏️",
          transcription: "бэд",
        },
        [lang.es]: {
          name: "cama 🛏️",
          transcription: "bed",
        },
        [lang.bg]: {
          name: "легло 🛏️",
          transcription: "бэд",
        },
        [lang.hi]: {
          name: "बिस्तर 🛏️",
          transcription: "बेड",
        },
      },
    },
    {
      id: 14,
      name: "sheets",
      categories: [categories.bedroom, categories.supplies],
      translation: {
        [lang.ro]: {
          name: "cearceafuri 🛌",
          transcription: "sheets",
        },
        [lang.ru]: {
          name: "простыни 🛌",
          transcription: "шитс",
        },
        [lang.ua]: {
          name: "простирадла 🛌",
          transcription: "шитс",
        },
        [lang.es]: {
          name: "sábanas 🛌",
          transcription: "sheets",
        },
        [lang.bg]: {
          name: "чаршафи 🛌",
          transcription: "шиитс",
        },
        [lang.hi]: {
          name: "चादरें 🛌",
          transcription: "शीट्स",
        },
      },
    },
    {
      id: 15,
      name: "pillow",
      categories: [categories.bedroom, categories.supplies],
      translation: {
        [lang.ro]: {
          name: "pernă 🛏️",
          transcription: "pi-lo",
        },
        [lang.ru]: {
          name: "подушка 🛏️",
          transcription: "пи-лоу",
        },
        [lang.ua]: {
          name: "подушка 🛏️",
          transcription: "пи-лоу",
        },
        [lang.es]: {
          name: "almohada 🛏️",
          transcription: "pi-lou",
        },
        [lang.bg]: {
          name: "възглавница 🛏️",
          transcription: "пи-лоу",
        },
        [lang.hi]: {
          name: "तकिया 🛏️",
          transcription: "पिलो",
        },
      },
    },
    {
      id: 16,
      name: "pillowcase",
      categories: [categories.bedroom, categories.supplies],
      translation: {
        [lang.ro]: {
          name: "față de pernă 🛏️",
          transcription: "pi-lo-keis",
        },
        [lang.ru]: {
          name: "наволочка 🛏️",
          transcription: "пи-лоу-кейс",
        },
        [lang.ua]: {
          name: "наволочка 🛏️",
          transcription: "пи-лоу-кейс",
        },
        [lang.es]: {
          name: "funda de almohada 🛏️",
          transcription: "pi-lou-keis",
        },
        [lang.bg]: {
          name: "калъфка за възглавница 🛏️",
          transcription: "пи-лоу-кейс",
        },
        [lang.hi]: {
          name: "तकिया कवर 🛏️",
          transcription: "पिलो केस",
        },
      },
    },
    {
      id: 17,
      name: "blanket",
      categories: [categories.bedroom, categories.supplies],
      translation: {
        [lang.ro]: {
          name: "pătură 🛌",
          transcription: "blan-ket",
        },
        [lang.ru]: {
          name: "одеяло 🛌",
          transcription: "бланкет",
        },
        [lang.ua]: {
          name: "ковдра 🛌",
          transcription: "бланкет",
        },
        [lang.es]: {
          name: "manta 🛌",
          transcription: "blan-ket",
        },
        [lang.bg]: {
          name: "одеяло 🛌",
          transcription: "бланкет",
        },
        [lang.hi]: {
          name: "कंबल 🛌",
          transcription: "ब्लैंकेट",
        },
      },
    },
    {
      id: 18,
      name: "duvet",
      categories: [categories.bedroom, categories.supplies],
      translation: {
        [lang.ro]: {
          name: "plapumă ☁️",
          transcription: "du-vei",
        },
        [lang.ru]: {
          name: "пуховое одеяло ☁️",
          transcription: "ду-вэй",
        },
        [lang.ua]: {
          name: "пухова ковдра ☁️",
          transcription: "ду-вей",
        },
        [lang.es]: {
          name: "edredón ☁️",
          transcription: "du-vet",
        },
        [lang.bg]: {
          name: "юрган ☁️",
          transcription: "ду-вей",
        },
        [lang.hi]: {
          name: "रजाई ☁️",
          transcription: "दूवेट",
        },
      },
    },
    {
      id: 19,
      name: "duvet cover",
      categories: [categories.bedroom, categories.supplies],
      translation: {
        [lang.ro]: {
          name: "husă de plapumă 🛌",
          transcription: "du-vei kuv-ăr",
        },
        [lang.ru]: {
          name: "пододеяльник 🛌",
          transcription: "ду-вэй КАВ-эр",
        },
        [lang.ua]: {
          name: "підковдра 🛌",
          transcription: "ду-вей КАВ-ер",
        },
        [lang.es]: {
          name: "funda de edredón 🛌",
          transcription: "du-vet cov-er",
        },
        [lang.bg]: {
          name: "плик за завивка 🛌",
          transcription: "ду-вей КАВ-ър",
        },
        [lang.hi]: {
          name: "कंबल का कवर 🛌",
          transcription: "दूवेट कवर",
        },
      },
    },
    {
      id: 20,
      name: "mattress",
      categories: [categories.bedroom],
      translation: {
        [lang.ro]: {
          name: "saltea 🛏️",
          transcription: "ma-tres",
        },
        [lang.ru]: {
          name: "матрас 🛏️",
          transcription: "ма-трас",
        },
        [lang.ua]: {
          name: "матрац 🛏️",
          transcription: "ма-трац",
        },
        [lang.es]: {
          name: "colchón 🛏️",
          transcription: "ma-tres",
        },
        [lang.bg]: {
          name: "матрак 🛏️",
          transcription: "ма-трак",
        },
        [lang.hi]: {
          name: "गद्दा 🛏️",
          transcription: "मैट्रेस",
        },
      },
    },
    {
      id: 21,
      name: "mattress protector",
      categories: [categories.bedroom, categories.supplies],
      translation: {
        [lang.ro]: {
          name: "protecție de saltea 🛡️",
          transcription: "ma-tres pruh-tek-tur",
        },
        [lang.ru]: {
          name: "наматрасник 🛡️",
          transcription: "МЭТ-pэс про-ТЭК-тэр",
        },
        [lang.ua]: {
          name: "наматрацник 🛡️",
          transcription: "МЕТ-рес про-ТЕК-тер",
        },
        [lang.es]: {
          name: "protector de colchón 🛡️",
          transcription: "ma-tres pruh-tec-tor",
        },
        [lang.bg]: {
          name: "протектор за матрак 🛡️",
          transcription: "МЭТ-рес про-ТЕК-тър",
        },
        [lang.hi]: {
          name: "गद्दा रक्षक 🛡️",
          transcription: "मैट्रेस प्रोटेक्टर",
        },
      },
    },
    {
      id: 22,
      name: "extra blanket",
      categories: [categories.bedroom, categories.requests],
      translation: {
        [lang.ro]: {
          name: "pătură suplimentară ➕🛌",
          transcription: "ek-struh blang-ket",
        },
        [lang.ru]: {
          name: "дополнительное одеяло ➕🛌",
          transcription: "ЭКСТРА БЛЭН-кит",
        },
        [lang.ua]: {
          name: "додаткова ковдра ➕🛌",
          transcription: "ЕКСТРА БЛЕН-кет",
        },
        [lang.es]: {
          name: "manta adicional ➕🛌",
          transcription: "ek-stra blan-ket",
        },
        [lang.bg]: {
          name: "допълнително одеяло ➕🛌",
          transcription: "ЕКСТРА БЛЕН-кет",
        },
        [lang.hi]: {
          name: "अतिरिक्त कंबल ➕🛌",
          transcription: "एक्स्ट्रा ब्लैंकेट",
        },
      },
    },
    {
      id: 23,
      name: "extra pillow",
      categories: [categories.bedroom, categories.requests],
      translation: {
        [lang.ro]: {
          name: "pernă suplimentară ➕🛏️",
          transcription: "ek-struh pi-lo",
        },
        [lang.ru]: {
          name: "дополнительная подушка ➕🛏️",
          transcription: "ЭКСТРА ПИ-лоу",
        },
        [lang.ua]: {
          name: "додаткова подушка ➕🛏️",
          transcription: "ЕКСТРА ПІ-лоу",
        },
        [lang.es]: {
          name: "almohada adicional ➕🛏️",
          transcription: "ek-stra pi-lou",
        },
        [lang.bg]: {
          name: "допълнителна възглавница ➕🛏️",
          transcription: "ЕКСТРА ПИ-лоу",
        },
        [lang.hi]: {
          name: "अतिरिक्त तकिया ➕🛏️",
          transcription: "एक्स्ट्रा पिलो",
        },
      },
    },
    {
      id: 24,
      name: "vacuum cleaner",
      categories: [categories.cleaning],
      translation: {
        [lang.ro]: {
          name: "aspirator 💨",
          transcription: "vak-yuum klee-năr",
        },
        [lang.ru]: {
          name: "пылесос 💨",
          transcription: "ВЭК-йуум КЛИ-нэр",
        },
        [lang.ua]: {
          name: "пилосос 💨",
          transcription: "ВЕК-йум КЛІ-нер",
        },
        [lang.es]: {
          name: "aspiradora 💨",
          transcription: "vak-juum klee-ner",
        },
        [lang.bg]: {
          name: "прахосмукачка 💨",
          transcription: "ВЕК-юум КЛИ-нър",
        },
        [lang.hi]: {
          name: "वैक्यूम क्लीनर 💨",
          transcription: "वैक्यूम क्लीनर",
        },
      },
    },
    {
      id: 25,
      name: "mop",
      categories: [categories.cleaning],
      translation: {
        [lang.ro]: {
          name: "mop 🧹",
          transcription: "mop",
        },
        [lang.ru]: {
          name: "швабра 🧹",
          transcription: "моп",
        },
        [lang.ua]: {
          name: "швабра 🧹",
          transcription: "моп",
        },
        [lang.es]: {
          name: "trapeador 🧹",
          transcription: "mop",
        },
        [lang.bg]: {
          name: "моп 🧹",
          transcription: "моп",
        },
        [lang.hi]: {
          name: "पोंछा 🧹",
          transcription: "मोप",
        },
      },
    },
    {
      id: 26,
      name: "broom",
      categories: [categories.cleaning],
      translation: {
        [lang.ro]: {
          name: "mătură 🧹",
          transcription: "broom",
        },
        [lang.ru]: {
          name: "метла 🧹",
          transcription: "брум",
        },
        [lang.ua]: {
          name: "мітла 🧹",
          transcription: "брум",
        },
        [lang.es]: {
          name: "escoba 🧹",
          transcription: "broom",
        },
        [lang.bg]: {
          name: "метла 🧹",
          transcription: "брум",
        },
        [lang.hi]: {
          name: "झाड़ू 🧹",
          transcription: "ब्रूम",
        },
      },
    },
    {
      id: 27,
      name: "dustpan",
      categories: [categories.cleaning],
      translation: {
        [lang.ro]: {
          name: "făraș 🗑️",
          transcription: "dust-pan",
        },
        [lang.ru]: {
          name: "совок 🗑️",
          transcription: "ДАСТ-пэн",
        },
        [lang.ua]: {
          name: "совок 🗑️",
          transcription: "ДАСТ-пен",
        },
        [lang.es]: {
          name: "recogedor 🗑️",
          transcription: "dust-pan",
        },
        [lang.bg]: {
          name: "лопатка за боклук 🗑️",
          transcription: "ДАСТ-пен",
        },
        [lang.hi]: {
          name: "धूलदान 🗑️",
          transcription: "डस्ट पैन",
        },
      },
    },
    {
      id: 28,
      name: "duster",
      categories: [categories.cleaning],
      translation: {
        [lang.ro]: {
          name: "pămătuf de praf 🧹",
          transcription: "dust-ăr",
        },
        [lang.ru]: {
          name: "метелка для пыли 🧹",
          transcription: "ДАСТ-эр",
        },
        [lang.ua]: {
          name: "щітка для пилу �",
          transcription: "ДАСТ-ер",
        },
        [lang.es]: {
          name: "plumero 🧹",
          transcription: "dust-er",
        },
        [lang.bg]: {
          name: "прахова кърпа 🧹",
          transcription: "ДАСТ-ър",
        },
        [lang.hi]: {
          name: "डस्टर 🧹",
          transcription: "डस्टर",
        },
      },
    },
    {
      id: 29,
      name: "cleaning esray",
      categories: [categories.cleaning, categories.supplies],
      translation: {
        [lang.ro]: {
          name: "esray de curățare 🧴",
          transcription: "klee-ning sprei",
        },
        [lang.ru]: {
          name: "чистящий спрей 🧴",
          transcription: "КЛИ-нинг СПРЭЙ",
        },
        [lang.ua]: {
          name: "чистячий спрей 🧴",
          transcription: "КЛІ-нінг СПРЕЙ",
        },
        [lang.es]: {
          name: "esray de limpieza 🧴",
          transcription: "klee-ning sprei",
        },
        [lang.bg]: {
          name: "спрей за почистване 🧴",
          transcription: "КЛИЙ-нинг СПРЕЙ",
        },
        [lang.hi]: {
          name: "सफाई स्प्रे 🧴",
          transcription: "क्लीनिंग स्प्रे",
        },
      },
    },
    {
      id: 30,
      name: "disinfectant",
      categories: [categories.cleaning, categories.supplies],
      translation: {
        [lang.ro]: {
          name: "dezinfectant 🧪",
          transcription: "dis-in-fek-tănt",
        },
        [lang.ru]: {
          name: "дезинфицирующее средство 🧪",
          transcription: "ДИС-ин-ФЕК-тант",
        },
        [lang.ua]: {
          name: "дезінфікуючий засіб 🧪",
          transcription: "ДИС-ін-ФЕК-тант",
        },
        [lang.es]: {
          name: "desinfectante 🧪",
          transcription: "dis-in-fec-tan-te",
        },
        [lang.bg]: {
          name: "дезинфектант 🧪",
          transcription: "ДИС-ин-ФЕК-тант",
        },
        [lang.hi]: {
          name: "डिसइंफेक्टेंट 🧪",
          transcription: "डिसइन्फेक्टेंट",
        },
      },
    },
    {
      id: 31,
      name: "glass cleaner",
      categories: [categories.cleaning, categories.supplies],
      translation: {
        [lang.ro]: {
          name: "soluție de curățat geamuri 🧴",
          transcription: "glas klee-năr",
        },
        [lang.ru]: {
          name: "средство для чистки стекол 🧴",
          transcription: "ГЛАС КЛИ-нэр",
        },
        [lang.ua]: {
          name: "засіб для чищення скла 🧴",
          transcription: "ГЛАС КЛІ-нер",
        },
        [lang.es]: {
          name: "limpiacristales 🧴",
          transcription: "glas klee-ner",
        },
        [lang.bg]: {
          name: "препарат за почистване на стъкла 🧴",
          transcription: "ГЛАС КЛИЙ-нър",
        },
        [lang.hi]: {
          name: "कांच क्लीनर 🧴",
          transcription: "ग्लास क्लीनर",
        },
      },
    },
    {
      id: 32,
      name: "do not disturb",
      categories: [categories.requests],
      translation: {
        [lang.ro]: {
          name: "nu deranjați 🤫",
          transcription: "doo not dis-turb",
        },
        [lang.ru]: {
          name: "не беспокоить 🤫",
          transcription: "ДУ НОТ ДИС-тёб",
        },
        [lang.ua]: {
          name: "не турбувати 🤫",
          transcription: "ДУ НОТ ДІС-тьорб",
        },
        [lang.es]: {
          name: "no molestar 🤫",
          transcription: "du not dis-turb",
        },
        [lang.bg]: {
          name: "не безпокойте 🤫",
          transcription: "ДУ НОТ ДИС-търб",
        },
        [lang.hi]: {
          name: "परेशान न करें 🤫",
          transcription: "डू नॉट डिस्टर्ब",
        },
      },
    },
    {
      id: 33,
      name: "please clean my room",
      categories: [categories.requests],
      translation: {
        [lang.ro]: {
          name: "vă rog să-mi curățați camera 🙏🧹",
          transcription: "pleez kleen mai room",
        },
        [lang.ru]: {
          name: "пожалуйста, уберите мою комнату 🙏🧹",
          transcription: "ПЛИЗ КЛИН МАЙ РУМ",
        },
        [lang.ua]: {
          name: "будь ласка, приберіть мою кімнату 🙏🧹",
          transcription: "ПЛІЗ КЛІН МАЙ РУМ",
        },
        [lang.es]: {
          name: "por favor, limpie mi habitación 🙏🧹",
          transcription: "plees kleen mai ruum",
        },
        [lang.bg]: {
          name: "моля, почистете стаята ми 🙏🧹",
          transcription: "ПЛИЙЗ КЛИЙН МАЙ РУМ",
        },
        [lang.hi]: {
          name: "कृपया मेरा कमरा साफ करें 🙏🧹",
          transcription: "प्लीज क्लीन माय रूम",
        },
      },
    },
    {
      id: 34,
      name: "need more towels",
      categories: [categories.requests],
      translation: {
        [lang.ro]: {
          name: "am nevoie de mai multe prosoape ➕🧖‍♀️",
          transcription: "need mor ta-uălz",
        },
        [lang.ru]: {
          name: "нужны дополнительные полотенца ➕🧖‍♀️",
          transcription: "НИД МОР ТАУ-элз",
        },
        [lang.ua]: {
          name: "потрібні додаткові рушники ➕🧖‍♀️",
          transcription: "НІД МОР ТАУ-елз",
        },
        [lang.es]: {
          name: "necesito más toallas ➕🧖‍♀️",
          transcription: "need mor tau-els",
        },
        [lang.bg]: {
          name: "трябват ми още кърпи ➕🧖‍♀️",
          transcription: "НИЙД МОР ТАУ-ълз",
        },
        [lang.hi]: {
          name: "मुझे और तौलिये चाहिए ➕🧖‍♀️",
          transcription: "नीड मोर टावल्स",
        },
      },
    },
    {
      id: 35,
      name: "need more toilet paper",
      categories: [categories.requests],
      translation: {
        [lang.ro]: {
          name: "am nevoie de mai multă hârtie igienică ➕🧻",
          transcription: "need mor toi-let pei-păr",
        },
        [lang.ru]: {
          name: "нужна туалетная бумага ➕🧻",
          transcription: "НИД МОР ТОЙ-лет ПЕЙ-пэр",
        },
        [lang.ua]: {
          name: "потрібен туалетний папір ➕🧻",
          transcription: "НІД МОР ТОЙ-лет ПЕЙ-пер",
        },
        [lang.es]: {
          name: "necesito más papel higiénico ➕🧻",
          transcription: "need mor toi-let pei-per",
        },
        [lang.bg]: {
          name: "трябва ми още тоалетна хартия ➕🧻",
          transcription: "НИЙД МОР ТОЙ-лет ПЕЙ-пър",
        },
        [lang.hi]: {
          name: "मुझे और टॉयलेट पेपर चाहिए ➕🧻",
          transcription: "नीड मोर टॉयलेट पेपर",
        },
      },
    },
    {
      id: 36,
      name: "clean",
      categories: [categories.cleaning],
      translation: {
        [lang.ro]: {
          name: "curat ✨",
          transcription: "kleen",
        },
        [lang.ru]: {
          name: "чистый ✨",
          transcription: "клин",
        },
        [lang.ua]: {
          name: "чистий ✨",
          transcription: "клін",
        },
        [lang.es]: {
          name: "limpio ✨",
          transcription: "clean",
        },
        [lang.bg]: {
          name: "чист ✨",
          transcription: "клин",
        },
        [lang.hi]: {
          name: "साफ ✨",
          transcription: "क्लीन",
        },
      },
    },
    {
      id: 37,
      name: "dirty",
      categories: [categories.cleaning],
      translation: {
        [lang.ro]: {
          name: "murdar 汚",
          transcription: "dur-tee",
        },
        [lang.ru]: {
          name: "грязный 汚",
          transcription: "ДЁР-ти",
        },
        [lang.ua]: {
          name: "брудний 汚",
          transcription: "ДЬОР-ті",
        },
        [lang.es]: {
          name: "sucio 汚",
          transcription: "dir-ti",
        },
        [lang.bg]: {
          name: "мръсен 汚",
          transcription: "ДЪР-ти",
        },
        [lang.hi]: {
          name: "गंदा 汚",
          transcription: "डर्टी",
        },
      },
    },
    {
      id: 38,
      name: "stain",
      categories: [categories.cleaning],
      translation: {
        [lang.ro]: {
          name: "pată 🔴",
          transcription: "stein",
        },
        [lang.ru]: {
          name: "пятно 🔴",
          transcription: "стейн",
        },
        [lang.ua]: {
          name: "пляма 🔴",
          transcription: "стейн",
        },
        [lang.es]: {
          name: "mancha 🔴",
          transcription: "stein",
        },
        [lang.bg]: {
          name: "петно 🔴",
          transcription: "стейн",
        },
        [lang.hi]: {
          name: "धब्बा 🔴",
          transcription: "स्टेन",
        },
      },
    },
    {
      id: 39,
      name: "trash",
      categories: [categories.cleaning],
      translation: {
        [lang.ro]: {
          name: "gunoi 🗑️",
          transcription: "trash",
        },
        [lang.ru]: {
          name: "мусор 🗑️",
          transcription: "трэш",
        },
        [lang.ua]: {
          name: "сміття 🗑️",
          transcription: "треш",
        },
        [lang.es]: {
          name: "basura 🗑️",
          transcription: "trash",
        },
        [lang.bg]: {
          name: "боклук 🗑️",
          transcription: "траш",
        },
        [lang.hi]: {
          name: "कचरा 🗑️",
          transcription: "ट्रैश",
        },
      },
    },
    {
      id: 40,
      name: "trash bin",
      categories: [categories.cleaning],
      translation: {
        [lang.ro]: {
          name: "coș de gunoi 🗑️",
          transcription: "trash bin",
        },
        [lang.ru]: {
          name: "мусорное ведро 🗑️",
          transcription: "ТРЭШ БИН",
        },
        [lang.ua]: {
          name: "смітник 🗑️",
          transcription: "ТРЕШ БІН",
        },
        [lang.es]: {
          name: "papelera 🗑️",
          transcription: "trash bin",
        },
        [lang.bg]: {
          name: "кошче за боклук 🗑️",
          transcription: "ТРАШ БИН",
        },
        [lang.hi]: {
          name: "कूड़ेदान 🗑️",
          transcription: "ट्रैश बिन",
        },
      },
    },
    {
      id: 41,
      name: "pillowcase",
      categories: [categories.bedroom, categories.supplies],
      translation: {
        [lang.ro]: {
          name: "față de pernă 🛏️",
          transcription: "pi-lo-keis",
        },
        [lang.ru]: {
          name: "наволочка 🛏️",
          transcription: "ПИ-лоу-кейс",
        },
        [lang.ua]: {
          name: "наволочка 🛏️",
          transcription: "ПІ-лоу-кейс",
        },
        [lang.es]: {
          name: "funda de almohada 🛏️",
          transcription: "pi-lou-keis",
        },
        [lang.bg]: {
          name: "калъфка за възглавница 🛏️",
          transcription: "ПИ-лоу-кейс",
        },
        [lang.hi]: {
          name: "तकिया का खोल 🛏️",
          transcription: "पिलो केस",
        },
      },
    },
    {
      id: 42,
      name: "remote control",
      categories: [categories.bedroom],
      translation: {
        [lang.ro]: {
          name: "telecomandă 🕹️",
          transcription: "ri-moht kon-trohl",
        },
        [lang.ru]: {
          name: "пульт дистанционного управления 🕹️",
          transcription: "РИ-моут конт-РОЛ",
        },
        [lang.ua]: {
          name: "пульт дистанційного керування 🕹️",
          transcription: "РІ-моут конт-РОЛ",
        },
        [lang.es]: {
          name: "mando a distancia 🕹️",
          transcription: "ri-moot con-trol",
        },
        [lang.bg]: {
          name: "дистанционно управление 🕹️",
          transcription: "РИ-моут конт-РОЛ",
        },
        [lang.hi]: {
          name: "रिमोट कंट्रोल 🕹️",
          transcription: "रिमोट कंट्रोल",
        },
      },
    },
    {
      id: 43,
      name: "air conditioning",
      categories: [categories.bedroom],
      translation: {
        [lang.ro]: {
          name: "aer condiționat ❄️",
          transcription: "air con-di-shun-ing",
        },
        [lang.ru]: {
          name: "кондиционер ❄️",
          transcription: "эир кон-ди-шни-нг",
        },
        [lang.ua]: {
          name: "кондиціонер ❄️",
          transcription: "еир кон-ди-шни-нг",
        },
        [lang.es]: {
          name: "aire acondicionado ❄️",
          transcription: "air con-di-shun-ing",
        },
        [lang.bg]: {
          name: "климатик ❄️",
          transcription: "еър кон-ди-шъ-нинг",
        },
        [lang.hi]: {
          name: "वातानुकूलन ❄️",
          transcription: "एयर कंडीशनिंग",
        },
      },
    },
    {
      id: 44,
      name: "hanger",
      categories: [categories.bedroom],
      translation: {
        [lang.ro]: {
          name: "umeras 🧥",
          transcription: "hang-ăr",
        },
        [lang.ru]: {
          name: "вешалка 🧥",
          transcription: "хэнг-ер",
        },
        [lang.ua]: {
          name: "вішалка 🧥",
          transcription: "хенгер",
        },
        [lang.es]: {
          name: "percha 🧥",
          transcription: "hang-er",
        },
        [lang.bg]: {
          name: "закачалка 🧥",
          transcription: "хенг-ър",
        },
        [lang.hi]: {
          name: "हैंगर 🧥",
          transcription: "हैंगर",
        },
      },
    },
    {
      id: 45,
      name: "luggage rack",
      categories: [categories.bedroom],
      translation: {
        [lang.ro]: {
          name: "suport pentru bagaje 💼",
          transcription: "lug-ij rak",
        },
        [lang.ru]: {
          name: "подставка для багажа 💼",
          transcription: "лаг-эдж рэк",
        },
        [lang.ua]: {
          name: "підставка для багажу 💼",
          transcription: "лаг-едж рек",
        },
        [lang.es]: {
          name: "portamaletas 💼",
          transcription: "lug-gej rak",
        },
        [lang.bg]: {
          name: "багажник 💼",
          transcription: "лаг-едж рак",
        },
        [lang.hi]: {
          name: "सामान रखने का रैक 💼",
          transcription: "लगैज रैक",
        },
      },
    },
    {
      id: 46,
      name: "make the bed",
      categories: [categories.cleaning, categories.requests],
      translation: {
        [lang.ro]: {
          name: "fă patul 🛏️",
          transcription: "meik dhə bed",
        },
        [lang.ru]: {
          name: "заправить кровать 🛏️",
          transcription: "мейк зе бед",
        },
        [lang.ua]: {
          name: "застелити ліжко 🛏️",
          transcription: "мейк зе бед",
        },
        [lang.es]: {
          name: "hacer la cama 🛏️",
          transcription: "meik the bed",
        },
        [lang.bg]: {
          name: "оправям леглото 🛏️",
          transcription: "мейк дъ бед",
        },
        [lang.hi]: {
          name: "बिस्तर बनाना 🛏️",
          transcription: "मेक द बेड",
        },
      },
    },
    {
      id: 47,
      name: "dust",
      categories: [categories.cleaning],
      translation: {
        [lang.ro]: {
          name: "praf 💨",
          transcription: "dast",
        },
        [lang.ru]: {
          name: "пыль 💨",
          transcription: "даст",
        },
        [lang.ua]: {
          name: "пил 💨",
          transcription: "даст",
        },
        [lang.es]: {
          name: "polvo 💨",
          transcription: "dast",
        },
        [lang.bg]: {
          name: "прах 💨",
          transcription: "дъст",
        },
        [lang.hi]: {
          name: "धूल 💨",
          transcription: "डस्ट",
        },
      },
    },
    {
      id: 48,
      name: "polish",
      categories: [categories.cleaning, categories.supplies],
      translation: {
        [lang.ro]: {
          name: "lustru ✨",
          transcription: "po-lish",
        },
        [lang.ru]: {
          name: "полироль ✨",
          transcription: "по-лиш",
        },
        [lang.ua]: {
          name: "поліроль ✨",
          transcription: "по-ліш",
        },
        [lang.es]: {
          name: "lustre ✨",
          transcription: "po-lish",
        },
        [lang.bg]: {
          name: "полир ✨",
          transcription: "по-лиш",
        },
        [lang.hi]: {
          name: "पॉलिश ✨",
          transcription: "पॉलिश",
        },
      },
    },
    {
      id: 49,
      name: "stains on the carpet",
      categories: [categories.requests, categories.cleaning],
      translation: {
        [lang.ro]: {
          name: "pete pe covor 🔴",
          transcription: "steinz on dhə kar-pet",
        },
        [lang.ru]: {
          name: "пятна на ковре 🔴",
          transcription: "стэйнз он зэ кар-пет",
        },
        [lang.ua]: {
          name: "плями на килимі 🔴",
          transcription: "стейнз он зе кар-пет",
        },
        [lang.es]: {
          name: "manchas en la alfombra 🔴",
          transcription: "stains on the car-pet",
        },
        [lang.bg]: {
          name: "петна по килима 🔴",
          transcription: "стейнз он дъ кар-пет",
        },
        [lang.hi]: {
          name: "कालीन पर दाग 🔴",
          transcription: "स्टेन्स ऑन द कारपेट",
        },
      },
    },
    {
      id: 50,
      name: "change the sheets",
      categories: [categories.requests, categories.cleaning],
      translation: {
        [lang.ro]: {
          name: "schimbă cearceafurile 🔄🛌",
          transcription: "cheinj dhə sheets",
        },
        [lang.ru]: {
          name: "поменять простыни 🔄🛌",
          transcription: "чейндж зе шитс",
        },
        [lang.ua]: {
          name: "поміняти простирадла 🔄🛌",
          transcription: "чейндж зе шитс",
        },
        [lang.es]: {
          name: "cambiar las sábanas 🔄🛌",
          transcription: "cheinj the sheets",
        },
        [lang.bg]: {
          name: "сменете чаршафите 🔄🛌",
          transcription: "чейндж дъ шийтс",
        },
        [lang.hi]: {
          name: "चादरें बदलें 🔄🛌",
          transcription: "चेंज द शीट्स",
        },
      },
    },
    {
      id: 51,
      name: "restock supplies",
      categories: [categories.requests, categories.supplies],
      translation: {
        [lang.ro]: {
          name: "reumple proviziile ➕🧴",
          transcription: "ree-stok suh-plai-z",
        },
        [lang.ru]: {
          name: "пополнить запасы ➕🧴",
          transcription: "ри-сток сап-лайз",
        },
        [lang.ua]: {
          name: "поповнити запаси ➕🧴",
          transcription: "рі-сток сап-лайз",
        },
        [lang.es]: {
          name: "reponer suministros ➕🧴",
          transcription: "ree-stock sup-pli-es",
        },
        [lang.bg]: {
          name: "заредете консумативите ➕🧴",
          transcription: "рий-сток съп-лайз",
        },
        [lang.hi]: {
          name: "आपूर्ति फिर से भरें ➕🧴",
          transcription: "रीस्टॉक सप्लाइज",
        },
      },
    },
    {
      id: 52,
      name: "empty the trash",
      categories: [categories.requests, categories.cleaning],
      translation: {
        [lang.ro]: {
          name: "golește gunoiul 🗑️",
          transcription: "emp-tee dhə trash",
        },
        [lang.ru]: {
          name: "вынести мусор 🗑️",
          transcription: "эмп-ти зэ трэш",
        },
        [lang.ua]: {
          name: "винести сміття 🗑️",
          transcription: "емпті зе треш",
        },
        [lang.es]: {
          name: "vaciar la basura 🗑️",
          transcription: "emp-tee the trash",
        },
        [lang.bg]: {
          name: "изхвърлете боклука 🗑️",
          transcription: "емп-ти дъ траш",
        },
        [lang.hi]: {
          name: "कचरा खाली करें 🗑️",
          transcription: "एम्प्टी द ट्रैश",
        },
      },
    },
    {
      id: 53,
      name: "broken",
      categories: [],
      translation: {
        [lang.ro]: {
          name: "stricat 💔",
          transcription: "bro-kăn",
        },
        [lang.ru]: {
          name: "сломанный 💔",
          transcription: "бро-кен",
        },
        [lang.ua]: {
          name: "зламаний 💔",
          transcription: "броукен",
        },
        [lang.es]: {
          name: "roto 💔",
          transcription: "bro-ken",
        },
        [lang.bg]: {
          name: "счупен 💔",
          transcription: "бро-кън",
        },
        [lang.hi]: {
          name: "टूटा हुआ 💔",
          transcription: "ब्रोकेन",
        },
      },
    },
    {
      id: 54,
      name: "report a problem",
      categories: [categories.requests],
      translation: {
        [lang.ro]: {
          name: "raportează o problemă ⚠️",
          transcription: "ri-port ə pro-bləm",
        },
        [lang.ru]: {
          name: "сообщить о проблеме ⚠️",
          transcription: "ри-порт э про-блем",
        },
        [lang.ua]: {
          name: "повідомити про проблему ⚠️",
          transcription: "рі-порт е про-блем",
        },
        [lang.es]: {
          name: "reportar un problema ⚠️",
          transcription: "ri-port a prob-lem",
        },
        [lang.bg]: {
          name: "докладвайте проблем ⚠️",
          transcription: "ри-порт ъ проблем",
        },
        [lang.hi]: {
          name: "एक समस्या की रिपोर्ट करें ⚠️",
          transcription: "रिपोर्ट अ प्रॉब्लम",
        },
      },
    },
    {
      id: 55,
      name: "light",
      categories: [],
      translation: {
        [lang.ro]: {
          name: "lumină 💡",
          transcription: "lait",
        },
        [lang.ru]: {
          name: "свет 💡",
          transcription: "лайт",
        },
        [lang.ua]: {
          name: "світло 💡",
          transcription: "лайт",
        },
        [lang.es]: {
          name: "luz 💡",
          transcription: "lait",
        },
        [lang.bg]: {
          name: "светлина �",
          transcription: "лайт",
        },
        [lang.hi]: {
          name: "रोशनी 💡",
          transcription: "लाइट",
        },
      },
    },
    {
      id: 56,
      name: "tidy up",
      categories: [categories.cleaning],
      translation: {
        [lang.ro]: {
          name: "fă ordine 🧹",
          transcription: "tai-dee up",
        },
        [lang.ru]: {
          name: "прибраться 🧹",
          transcription: "тай-ди ап",
        },
        [lang.ua]: {
          name: "прибрати 🧹",
          transcription: "тайді ап",
        },
        [lang.es]: {
          name: "ordenar 🧹",
          transcription: "tai-di ap",
        },
        [lang.bg]: {
          name: "подреждам 🧹",
          transcription: "тай-ди ъп",
        },
        [lang.hi]: {
          name: "साफ सुथरा करना 🧹",
          transcription: "टाइडी अप",
        },
      },
    },
    {
      id: 57,
      name: "stains on the linen",
      categories: [categories.requests, categories.cleaning],
      translation: {
        [lang.ro]: {
          name: "pete pe lenjerie 🔴",
          transcription: "steinz on dhə li-nən",
        },
        [lang.ru]: {
          name: "пятна на белье 🔴",
          transcription: "стэйнз он зэ ли-нэн",
        },
        [lang.ua]: {
          name: "плями на білизні 🔴",
          transcription: "стейнз он зе лінен",
        },
        [lang.es]: {
          name: "manchas en la ropa de cama 🔴",
          transcription: "stains on the li-nen",
        },
        [lang.bg]: {
          name: "петна по спалното бельо 🔴",
          transcription: "стейнз он дъ ли-нън",
        },
        [lang.hi]: {
          name: "लिनेन पर दाग 🔴",
          transcription: "स्टेन्स ऑन द लिनेन",
        },
      },
    },
    {
      id: 58,
      name: "refill soap diesenser",
      categories: [categories.requests, categories.supplies],
      translation: {
        [lang.ro]: {
          name: "reumple dozatorul de săpun 🧴",
          transcription: "ree-fil soup di-spen-săr",
        },
        [lang.ru]: {
          name: "пополнить диспенсер для мыла 🧴",
          transcription: "ри-фил соуп дис-пен-сер",
        },
        [lang.ua]: {
          name: "поповнити диспенсер для мила 🧴",
          transcription: "рі-філ соуп діспенсер",
        },
        [lang.es]: {
          name: "rellenar el diesensador de jabón 🧴",
          transcription: "ree-fil soup di-spen-ser",
        },
        [lang.bg]: {
          name: "напълнете дозатора за сапун 🧴",
          transcription: "рий-фийл соуп диспенсър",
        },
        [lang.hi]: {
          name: "साबुन डिस्पेंसर फिर से भरें 🧴",
          transcription: "रीफिल सोप डिस्पेंसर",
        },
      },
    },
    {
      id: 59,
      name: "check out",
      categories: [categories.requests],
      translation: {
        [lang.ro]: {
          name: "verificare finală ➡️",
          transcription: "chek aut",
        },
        [lang.ru]: {
          name: "выезд ➡️",
          transcription: "чек аут",
        },
        [lang.ua]: {
          name: "виїзд ➡️",
          transcription: "чек аут",
        },
        [lang.es]: {
          name: "salida ➡️",
          transcription: "chek aut",
        },
        [lang.bg]: {
          name: "напускане ➡️",
          transcription: "чек-аут",
        },
        [lang.hi]: {
          name: "चेक आउट ➡️",
          transcription: "चेक आउट",
        },
      },
    },
    {
      id: 60,
      name: "check in",
      categories: [categories.requests],
      translation: {
        [lang.ro]: {
          name: "înregistrare ⬅️",
          transcription: "chek in",
        },
        [lang.ru]: {
          name: "заезд ⬅️",
          transcription: "чек ин",
        },
        [lang.ua]: {
          name: "заїзд ⬅️",
          transcription: "чек ін",
        },
        [lang.es]: {
          name: "entrada ⬅️",
          transcription: "chek in",
        },
        [lang.bg]: {
          name: "настаняване ⬅️",
          transcription: "чек-ин",
        },
        [lang.hi]: {
          name: "चेक इन ⬅️",
          transcription: "चेक इन",
        },
      },
    },

    {
      id: 61,
      name: "foam pillow",
      categories: [categories.bedroom, categories.supplies],
      translation: {
        [lang.ro]: {
          name: "pernă de spumă",
          transcription: "fohm pi-lo",
        },
        [lang.ru]: {
          name: "поролоновая подушка",
          transcription: "фоум пи-лоу",
        },
        [lang.ua]: {
          name: "поролонова подушка",
          transcription: "фоум пі-лоу",
        },
        [lang.es]: {
          name: "almohada de espuma",
          transcription: "fohm pi-lou",
        },
        [lang.bg]: {
          name: "възглавница от пяна",
          transcription: "фоум пи-лоу",
        },
        [lang.hi]: {
          name: "फोम तकिया",
          transcription: "फोम पिलो",
        },
      },
    },
    {
      id: 62,
      name: "feather pillow",
      categories: [categories.bedroom, categories.supplies],
      translation: {
        [lang.ro]: {
          name: "pernă de pene",
          transcription: "fe-dhăr pi-lo",
        },
        [lang.ru]: {
          name: "перовая подушка",
          transcription: "фе-зер пи-лоу",
        },
        [lang.ua]: {
          name: "пір'яна подушка",
          transcription: "фезер пі-лоу",
        },
        [lang.es]: {
          name: "almohada de plumas",
          transcription: "fe-dher pi-lou",
        },
        [lang.bg]: {
          name: "възглавница от пера",
          transcription: "фе-дър пи-лоу",
        },
        [lang.hi]: {
          name: "पंख तकिया",
          transcription: "फ़ेदर पिलो",
        },
      },
    },
    {
      id: 63,
      name: "topper (for the bed)",
      categories: [categories.bedroom, categories.supplies],
      translation: {
        [lang.ro]: {
          name: "topper (pentru pat)",
          transcription: "to-păr (for dhə bed)",
        },
        [lang.ru]: {
          name: "топпер (для кровати)",
          transcription: "топ-пер (фор зэ бэд)",
        },
        [lang.ua]: {
          name: "топпер (для ліжка)",
          transcription: "топпер (фор зе бед)",
        },
        [lang.es]: {
          name: "topper (para la cama)",
          transcription: "to-per (for de bed)",
        },
        [lang.bg]: {
          name: "топер (за легло)",
          transcription: "топър (фор дъ бед)",
        },
        [lang.hi]: {
          name: "तोपर (बिस्तर के लिए)",
          transcription: "टॉपर (फॉर द बेड)",
        },
      },
    },
    {
      id: 64,
      name: "hole (in the linen)",
      categories: [categories.requests, categories.cleaning],
      translation: {
        [lang.ro]: {
          name: "gaură (în lenjerie)",
          transcription: "houl (in dhə li-nən)",
        },
        [lang.ru]: {
          name: "дыра (в белье)",
          transcription: "хоул (ин зэ ли-нен)",
        },
        [lang.ua]: {
          name: "дірка (в білизні)",
          transcription: "хоул (ін зе лінен)",
        },
        [lang.es]: {
          name: "agujero (en la ropa de cama)",
          transcription: "houl (in the li-nen)",
        },
        [lang.bg]: {
          name: "дупка (в спалното бельо)",
          transcription: "хоул (ин дъ ли-нън)",
        },
        [lang.hi]: {
          name: "छेद (लिनेन में)",
          transcription: "होल (इन द लिनेन)",
        },
      },
    },
  ],
}

function Database(testData) {
  let data = testData

  return {
    get All() {
      // console.log(data.list.map((el) => el.translation))
      return data.list
    },
    ById: (id) => {
      return data.list.filter((item) => item.id === id)
    },
    ByCategory: (categoryName) => {
      if (categoryName.name === categories.all.name) return data.list
      let filtered = new Set()
      for (let item of data.list) {
        if (Array.isArray(item?.categories)) {
          for (let category of item?.categories) {
            if (category?.name === categoryName?.name) filtered.add(item)
          }
        }
      }

      return Array.from(filtered)
    },
  }
}

function newDatabase() {
  return new Database(testData)
}

export { newDatabase, categories, lang }
