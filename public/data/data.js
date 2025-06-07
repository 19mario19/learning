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
  sentences: {
    name: "sentences",
    translation: {
      [lang.ro]: "propoziții 🤗",
      [lang.ru]: "предложения 🤗",
      [lang.ua]: "речення 🤗",
      [lang.es]: "frases 🤗",
      [lang.bg]: "изречения 🤗",
      [lang.hi]: "वाक्य 🤗",
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
  damages: {
    name: "damages",
    translation: {
      [lang.ro]: "deteriorări 💥",
      [lang.ru]: "повреждения 💥",
      [lang.ua]: "пошкодження 💥",
      [lang.es]: "daños 💥",
      [lang.bg]: "щети 💥",
      [lang.hi]: "नुकसान 💥",
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
      name: "cleaning spray",
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
      name: "refill soap dispenser",
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
const newWordsWithPhonetics = [
  {
    name: "towel",
    phonetic: "/taʊl/",
  },
  {
    name: "hand towel",
    phonetic: "/hænd ˈtaʊl/",
  },
  {
    name: "bath mat",
    phonetic: "/bæθ mæt/",
  },
  {
    name: "toilet paper",
    phonetic: "/ˈtɔɪlət ˈpeɪpər/",
  },
  {
    name: "shower",
    phonetic: "/ˈʃaʊər/",
  },
  {
    name: "bathtub",
    phonetic: "/ˈbæθtʌb/",
  },
  {
    name: "toilet",
    phonetic: "/ˈtɔɪlət/",
  },
  {
    name: "sink",
    phonetic: "/sɪŋk/",
  },
  {
    name: "shampoo",
    phonetic: "/ʃæmˈpuː/",
  },
  {
    name: "conditioner",
    phonetic: "/kənˈdɪʃənər/",
  },
  {
    name: "body wash",
    phonetic: "/ˈbɒdi wɔʃ/",
  },
  {
    name: "soap",
    phonetic: "/soʊp/",
  },
  {
    name: "hairdryer",
    phonetic: "/ˈheərˌdraɪər/",
  },
  {
    name: "bed",
    phonetic: "/bed/",
  },
  {
    name: "sheets",
    phonetic: "/ʃiːts/",
  },
  {
    name: "pillow",
    phonetic: "/ˈpɪloʊ/",
  },
  {
    name: "pillowcase",
    phonetic: "/ˈpɪloʊkeɪs/",
  },
  {
    name: "blanket",
    phonetic: "/ˈblæŋkɪt/",
  },
  {
    name: "duvet",
    phonetic: "/ˈdjuːveɪ/",
  },
  {
    name: "duvet cover",
    phonetic: "/ˈdjuːveɪ ˈkʌvər/",
  },
  {
    name: "mattress",
    phonetic: "/ˈmætrɪs/",
  },
  {
    name: "mattress protector",
    phonetic: "/ˈmætrɪs prəˈtektər/",
  },
  {
    name: "extra blanket",
    phonetic: "/ˈekstrə ˈblæŋkɪt/",
  },
  {
    name: "extra pillow",
    phonetic: "/ˈekstrə ˈpɪloʊ/",
  },
  {
    name: "vacuum cleaner",
    phonetic: "/ˈvækjuːm ˈkliːnər/",
  },
  {
    name: "mop",
    phonetic: "/mɒp/",
  },
  {
    name: "broom",
    phonetic: "/bruːm/",
  },
  {
    name: "dustpan",
    phonetic: "/ˈdʌstˌpæn/",
  },
  {
    name: "duster",
    phonetic: "/ˈdʌstər/",
  },
  {
    name: "cleaning spray",
    phonetic: "/ˈkliːnɪŋ spreɪ/",
  },
  {
    name: "disinfectant",
    phonetic: "/ˌdɪsɪnˈfektənt/",
  },
  {
    name: "glass cleaner",
    phonetic: "/ɡlæs ˈkliːnər/",
  },
  {
    name: "do not disturb",
    phonetic: "/duː nɒt dɪˈstɜːb/",
  },
  {
    name: "please clean my room",
    phonetic: "/pliːz kliːn maɪ ruːm/",
  },
  {
    name: "need more towels",
    phonetic: "/niːd mɔːr ˈtaʊəlz/",
  },
  {
    name: "need more toilet paper",
    phonetic: "/niːd mɔːr ˈtɔɪlət ˈpeɪpər/",
  },
  {
    name: "clean",
    phonetic: "/kliːn/",
  },
  {
    name: "dirty",
    phonetic: "/ˈdɜːrti/",
  },
  {
    name: "stain",
    phonetic: "/steɪn/",
  },
  {
    name: "trash",
    phonetic: "/træʃ/",
  },
  {
    name: "trash bin",
    phonetic: "/træʃ bɪn/",
  },
  {
    name: "remote control",
    phonetic: "/rɪˈmoʊt kənˈtroʊl/",
  },
  {
    name: "air conditioning",
    phonetic: "/er kənˈdɪʃənɪŋ/",
  },
  {
    name: "hanger",
    phonetic: "/ˈhæŋər/",
  },
  {
    name: "luggage rack",
    phonetic: "/ˈlʌɡɪdʒ ræk/",
  },
  {
    name: "make the bed",
    phonetic: "/meɪk ðə bed/",
  },
  {
    name: "dust",
    phonetic: "/dʌst/",
  },
  {
    name: "polish",
    phonetic: "/ˈpɒlɪʃ/",
  },
  {
    name: "stains on the carpet",
    phonetic: "/steɪnz ɒn ðə ˈkɑːrpɪt/",
  },
  {
    name: "change the sheets",
    phonetic: "/tʃeɪndʒ ðə ʃiːts/",
  },
  {
    name: "restock supplies",
    phonetic: "/riːˈstɒk səˈplaɪz/",
  },
  {
    name: "empty the trash",
    phonetic: "/ˈempti ðə træʃ/",
  },
  {
    name: "broken",
    phonetic: "/ˈbroʊkən/",
  },
  {
    name: "report a problem",
    phonetic: "/rɪˈpɔːrt ə ˈprɒbləm/",
  },
  {
    name: "light",
    phonetic: "/laɪt/",
  },
  {
    name: "tidy up",
    phonetic: "/ˈtaɪdi ʌp/",
  },
  {
    name: "stains on the linen",
    phonetic: "/steɪnz ɒn ðə ˈlɪnɪn/",
  },
  {
    name: "refill soap dispenser",
    phonetic: "/riːˈfɪl soʊp dɪˈspensər/",
  },
  {
    name: "check out",
    phonetic: "/tʃek aʊt/",
  },
  {
    name: "check in",
    phonetic: "/tʃek ɪn/",
  },
  {
    name: "foam pillow",
    phonetic: "/foʊm ˈpɪloʊ/",
  },
  {
    name: "feather pillow",
    phonetic: "/ˈfeðər ˈpɪloʊ/",
  },
  {
    name: "topper (for the bed)",
    phonetic: "/ˈtɒpər (fɔːr ðə bed)/",
  },
  {
    name: "hole (in the linen)",
    phonetic: "/hoʊl (ɪn ðə ˈlɪnɪn)/",
  },
]

// adding phonetic
const array = Array.isArray(testData.list)
  ? testData?.list.map((item) => {
      for (let word of newWordsWithPhonetics) {
        if (word.name === item.name) {
          return { ...item, ...word }
        }
      }
    })
  : []

testData.list = array

// adding audio
const withAudio = [
  {
    id: 0,
    name: "towel",
    phonetic: "/taʊl/",
    audio: "https://api.dictionaryapi.dev/media/pronunciations/en/towel-uk.mp3",
    meaning:
      "A cloth used for wiping, especially one used for drying anything wet, as a person after a bath.",
  },
  {
    id: 1,
    name: "shower",
    phonetic: "",
    audio:
      "https://api.dictionaryapi.dev/media/pronunciations/en/shower-1-au.mp3",
    meaning:
      "A brief fall of precipitation (spell of rain, or a similar fall of snow, sleet, or cascade).",
  },
  {
    id: 3,
    name: "toilet",
    phonetic: "/ˈtɔɪ.lət/",
    audio:
      "https://api.dictionaryapi.dev/media/pronunciations/en/toilet-uk.mp3",
    meaning:
      "A covering of linen, silk, or tapestry, spread over a dressing table in a chamber or dressing room.",
  },
  {
    id: 4,
    name: "sink",
    phonetic: "/sɪŋk/",
    audio: "https://api.dictionaryapi.dev/media/pronunciations/en/sink-uk.mp3",
    meaning: "A basin used for holding water for washing.",
  },
  {
    id: 7,
    name: "body",
    phonetic: "/ˈbɒdi/",
    audio: "https://api.dictionaryapi.dev/media/pronunciations/en/body-uk.mp3",
    meaning: "Physical frame.",
  },
  {
    id: 9,
    name: "soap",
    phonetic: "/səʊp/",
    audio: "https://api.dictionaryapi.dev/media/pronunciations/en/soap-uk.mp3",
    meaning:
      "A substance able to mix with both oil and water, used for cleaning, often in the form of a solid bar or in liquid form, derived from fats or made synthetically.",
  },
  {
    id: 13,
    name: "pillow",
    phonetic: "/ˈpɪləʊ/",
    audio:
      "https://api.dictionaryapi.dev/media/pronunciations/en/pillow-uk.mp3",
    meaning: "A soft cushion used to support the head in bed.",
  },
  {
    id: 15,
    name: "blanket",
    phonetic: "/ˈblæŋkɪt/",
    audio:
      "https://api.dictionaryapi.dev/media/pronunciations/en/blanket-uk.mp3",
    meaning:
      "A heavy, loosely woven fabric, usually large and woollen, used for warmth while sleeping or resting.",
  },
  {
    id: 16,
    name: "duvet",
    phonetic: "/ˈduːveɪ/",
    audio: "https://api.dictionaryapi.dev/media/pronunciations/en/duvet-uk.mp3",
    meaning: "A thick, padded quilt used instead of blankets.",
  },
]

const array2 = Array.isArray(testData.list)
  ? testData?.list.map((item) => {
      for (let word of withAudio) {
        if (word.name === item.name) {
          return { ...item, ...word }
        }
      }
      return item
    })
  : []

testData.list = array2

const sentences = [
  {
    id: 75,
    name: "Good morning [guest's name], my name is [your name] from housekeeping. Would you like me to clean your room now or shall I come later?",
    categories: [categories.requests, categories.sentences],
    translation: {
      [lang.ro]: {
        name: "Bună dimineața [numele oaspetelui], numele meu este [numele tău] de la curățenie. Doriți să vă curăț camera acum sau să vin mai târziu?",
        transcription:
          "guud mor-ning [ghest's neim], mai neim iz [your neim] from haus-ki-ping. uuld yuu laik mi tu klin yoor rum nau or shal ai kam lei-tăr?",
      },
      [lang.ru]: {
        name: "Доброе утро [имя гостя], меня зовут [ваше имя], я из housekeeping. Хотите, чтобы я убрал(а) вашу комнату сейчас или мне прийти позже?",
        transcription:
          "гуд мо-рнинг [гэстс нэйм], май нэйм из [ёр нэйм] фром хаус-ки-пинг. вуд ю лайк ми ту клин ёр рум нау ор шэл ай кам лэй-тер?",
      },
      [lang.ua]: {
        name: "Доброго ранку [ім'я гостя], мене звуть [ваше ім'я], я з housekeeping. Хочете, щоб я прибрав(ла) вашу кімнату зараз чи мені прийти пізніше?",
        transcription:
          "гуд мо-рнінг [гестс нейм], май нейм із [йор нейм] фром хаус-кіпінг. вуд ю лайк мі ту клін йор рум нау ор шел ай кам лей-тер?",
      },
      [lang.es]: {
        name: "Buenos días [nombre del huésped], mi nombre es [tu nombre] de limpieza. ¿Le gustaría que limpie su habitación ahora o prefiere que venga más tarde?",
        transcription:
          "gud mor-ning [guest's neim], mai neim is [your neim] from haus-ki-ping. wud iu laik mi tu klin ior rum nau or shal ai cam le-ter?",
      },
      [lang.bg]: {
        name: "Добро утро [име на госта], моето име е [вашето име] от домакинството. Искате ли да почистя стаята ви сега или да дойда по-късно?",
        transcription:
          "гуд мо-рнинг [гестс нейм], май нейм из [йор нейм] фром хаус-кий-пинг. ууд ю лайк ми ту клийн йор руум nau ор шал ай към лей-тър?",
      },
      [lang.hi]: {
        name: "सुप्रभात [अतिथि का नाम], मेरा नाम [आपका नाम] है, मैं हाउसकीपिंग से हूँ। क्या आप चाहेंगे कि मैं आपका कमरा अभी साफ करूँ या मैं बाद में आऊँ?",
        transcription:
          "गुड मॉर्निंग [गेस्ट्स नेम], माई नेम इज [योर नेम] फ्रॉम हाउसकीपिंग। वुड यू लाइक मी टू क्लीन योर रूम नाउ ऑर शैल आई कम लेटर?",
      },
    },
  },
  {
    id: 65,
    name: "Good morning! May I clean your room now?",
    categories: [categories.sentences],
    translation: {
      [lang.ro]: {
        name: "Bună dimineața! Pot să vă curăț camera acum?",
        transcription: "gud mor-ning! mei ai klin yur rum nau?",
      },
      [lang.ru]: {
        name: "Доброе утро! Могу я убрать вашу комнату сейчас?",
        transcription: "гуд мо-рнинг! мэй ай клин юр рум нау?",
      },
      [lang.ua]: {
        name: "Доброго ранку! Чи можу я прибрати вашу кімнату зараз?",
        transcription: "гуд мо-рнінг! мей ай клін юр рум нау?",
      },
      [lang.es]: {
        name: "¡Buenos días! ¿Puedo limpiar su habitación ahora?",
        transcription: "gud mor-ning! mei ai clin yur rum nau?",
      },
      [lang.bg]: {
        name: "Добро утро! Мога ли да почистя стаята ви сега?",
        transcription: "гуд мор-нинг! мей ай клин юр рум нау?",
      },
      [lang.hi]: {
        name: "सुप्रभात! क्या मैं अभी आपका कमरा साफ कर सकता हूँ?",
        transcription: "गुड मोर-निंग! मे आई क्लीन योर रूम नाउ?",
      },
    },
  },
  {
    id: 66,
    name: "Good afternoon! Would you like your room serviced?",
    categories: [categories.sentences],
    translation: {
      [lang.ro]: {
        name: "Bună ziua! Doriți să vă aranjăm camera?",
        transcription: "gud af-ter-nun! wud yoo laik yur rum sur-vist?",
      },
      [lang.ru]: {
        name: "Добрый день! Хотите, чтобы вашу комнату убрали?",
        transcription: "гуд аф-тер-нун! вуд ю лайк юр рум сёр-вист?",
      },
      [lang.ua]: {
        name: "Добрий день! Бажаєте прибирання кімнати?",
        transcription: "гуд аф-тер-нун! вуд ю лайк юр рум сер-віст?",
      },
      [lang.es]: {
        name: "¡Buenas tardes! ¿Le gustaría que arregláramos su habitación?",
        transcription: "gud af-ter-nun! wud yu laik yur rum ser-vist?",
      },
      [lang.bg]: {
        name: "Добър ден! Желаете ли стаята ви да бъде почистена?",
        transcription: "гуд аф-тър-нун! ууд ю лайк юр рум сър-вист?",
      },
      [lang.hi]: {
        name: "शुभ दोपहर! क्या आप अपने कमरे में सेवा करवाना चाहेंगे?",
        transcription: "गुड आफ-टर-नून! वुड यू लाइक योर रूम सर-विस्ड?",
      },
    },
  },
  {
    id: 67,
    name: "Good evening. Do you need fresh towels?",
    categories: [categories.sentences],
    translation: {
      [lang.ro]: {
        name: "Bună seara. Aveți nevoie de prosoape curate?",
        transcription: "gud iv-ning. doo yoo nid fresh tau-els?",
      },
      [lang.ru]: {
        name: "Добрый вечер. Вам нужны свежие полотенца?",
        transcription: "гуд ив-нинг. ду ю нид фреш тау-элс?",
      },
      [lang.ua]: {
        name: "Добрий вечір. Вам потрібні свіжі рушники?",
        transcription: "гуд ів-нінг. ду ю нід фреш руш-никс?", // used рушникс for towels
      },
      [lang.es]: {
        name: "Buenas noches. ¿Necesita toallas limpias?",
        transcription: "gud iv-ning. du yu nid fresh to-a-yas?", // used toayas for towels
      },
      [lang.bg]: {
        name: "Добър вечер. Имате ли нужда от чисти хавлии?",
        transcription: "гуд ив-нинг. ду ю нийд фреш хав-лии?", // used хавлии for towels
      },
      [lang.hi]: {
        name: "शुभ संध्या। क्या आपको नए तौलिये चाहिए?",
        transcription: "गुड ईव-निंग. डू यू नीड फ्रेश तौ-लिये?", // used तौलिए for towels
      },
    },
  },
  {
    id: 68,
    name: "I am here to refresh your room.",
    categories: [categories.sentences],
    translation: {
      [lang.ro]: {
        name: "Sunt aici să vă reîmprospătez camera.",
        transcription: "ai am hir tu ri-fresh yur rum",
      },
      [lang.ru]: {
        name: "Я здесь, чтобы обновить вашу комнату.",
        transcription: "ай эм хир ту ри-фреш юр рум",
      },
      [lang.ua]: {
        name: "Я тут, щоб оновити вашу кімнату.",
        transcription: "ай ем хір ту рі-фреш юр рум",
      },
      [lang.es]: {
        name: "Estoy aquí para refrescar su habitación.",
        transcription: "ai am hir tu ri-fresh yur rum",
      },
      [lang.bg]: {
        name: "Тук съм, за да освежа стаята ви.",
        transcription: "ай ем хир ту ри-фреш юр рум",
      },
      [lang.hi]: {
        name: "मैं आपका कमरा ताज़ा करने के लिए यहाँ हूँ।",
        transcription: "आई एम हियर टू री-फ्रेश योर रूम",
      },
    },
  },
  {
    id: 69,
    name: "Would you like your bed changed?",
    categories: [categories.sentences],
    translation: {
      [lang.ro]: {
        name: "Doriți să vă schimbăm lenjeria de pat?",
        transcription: "wud yoo laik yur bed cheinjd?",
      },
      [lang.ru]: {
        name: "Хотите, чтобы сменили постельное белье?",
        transcription: "вуд ю лайк юр бед чейнджд?",
      },
      [lang.ua]: {
        name: "Бажаєте змінити постіль?",
        transcription: "вуд ю лайк юр бед чейнджд?",
      },
      [lang.es]: {
        name: "¿Le gustaría que le cambiaran la cama?",
        transcription: "wud yu laik yur bed cheinjd?",
      },
      [lang.bg]: {
        name: "Желаете ли да ви сменим чаршафите?",
        transcription: "ууд ю лайк юр бед чейнджд?",
      },
      [lang.hi]: {
        name: "क्या आप अपना बिस्तर बदलवाना चाहेंगे?",
        transcription: "वुड यू लाइक योर बेड चेंज्ड?",
      },
    },
  },
  {
    id: 70,
    name: "Do you need more amenities like soap or shampoo?",
    categories: [categories.sentences],
    translation: {
      [lang.ro]: {
        name: "Aveți nevoie de mai multe articole de toaletă, cum ar fi săpun sau șampon?",
        transcription: "doo yoo nid mor a-men-i-tiz laik sohp or sham-poo?",
      },
      [lang.ru]: {
        name: "Вам нужны дополнительные принадлежности, такие как мыло или шампунь?",
        transcription: "ду ю нид мор а-мен-и-тиз лайк соуп ор шам-пунь?",
      },
      [lang.ua]: {
        name: "Вам потрібно більше зручностей, таких як мило чи шампунь?",
        transcription: "ду ю нід мор а-мен-і-тіз лайк соуп ор шам-пунь?",
      },
      [lang.es]: {
        name: "¿Necesita más artículos de tocador como jabón o champú?",
        transcription: "du yu nid mor a-men-i-tiz laik soap or sham-pu?",
      },
      [lang.bg]: {
        name: "Имате ли нужда от повече консумативи като сапун или шампоан?",
        transcription: "ду ю нийд мор а-мен-и-тийз лайк са-пун ор шам-поан?",
      },
      [lang.hi]: {
        name: "क्या आपको साबुन या शैम्पू जैसी और सुविधाएं चाहिए?",
        transcription: "डू यू नीड मोर ए-मे-नि-टीज़ लाइक सोप और शैम्पू?",
      },
    },
  },
  {
    id: 71,
    name: "I can bring you extra pillows/blankets.",
    categories: [categories.sentences],
    translation: {
      [lang.ro]: {
        name: "Vă pot aduce perne/pături suplimentare.",
        transcription: "ai kan bring yoo eks-tra pi-lous/blang-kets",
      },
      [lang.ru]: {
        name: "Я могу принести вам дополнительные подушки/одеяла.",
        transcription: "ай кан бринг ю экс-тра пи-лоус/блэн-кетс",
      },
      [lang.ua]: {
        name: "Я можу принести вам додаткові подушки/ковдри.",
        transcription: "ай кан брінг ю екс-тра пі-лоус/ков-дрі", // used ковдри for blankets
      },
      [lang.es]: {
        name: "Puedo traerle almohadas/mantas adicionales.",
        transcription: "ai kan bring yu eks-tra pi-lous/blan-kets",
      },
      [lang.bg]: {
        name: "Мога да ви донеса допълнителни възглавници/одеяла.",
        transcription: "ай кан бринг ю екс-тра въз-глав-ници/оде-яла", // used възглавници/одеяла
      },
      [lang.hi]: {
        name: "मैं आपको अतिरिक्त तकिए/कंबल ला सकता हूँ।",
        transcription: "आई कैन ब्रिंग यू एक्स-ट्रा पि-लोज़/ब्लैं-केट्स",
      },
    },
  },
  {
    id: 72,
    name: "Is there anything else I can get for you?",
    categories: [categories.sentences],
    translation: {
      [lang.ro]: {
        name: "Mai este ceva ce vă pot aduce?",
        transcription: "iz ther en-ee-thing els ai kan get for yoo?",
      },
      [lang.ru]: {
        name: "Могу ли я еще что-нибудь для вас принести?",
        transcription: "из зер эни-синг элс ай кан гет фор ю?",
      },
      [lang.ua]: {
        name: "Чи є ще щось, що я можу принести для вас?",
        transcription: "із зер ені-сінг елс ай кан гет фор ю?",
      },
      [lang.es]: {
        name: "¿Hay algo más en lo que pueda ayudarle?",
        transcription: "iz der en-i-thing els ai kan get for yu?",
      },
      [lang.bg]: {
        name: "Има ли нещо друго, което мога да ви донеса?",
        transcription: "из зер е-ни-тинг елс ай кан гет фор ю?",
      },
      [lang.hi]: {
        name: "क्या मैं आपके लिए कुछ और ला सकता हूँ?",
        transcription: "इज़ देअर एनी-थिंग एल्स आई कैन गेट फॉर यू?",
      },
    },
  },
  {
    id: 73,
    name: "Your room is now clean and tidy.",
    categories: [categories.sentences],
    translation: {
      [lang.ro]: {
        name: "Camera dumneavoastră este acum curată și ordonată.",
        transcription: "yur rum iz nau klin end tai-di",
      },
      [lang.ru]: {
        name: "Ваша комната теперь чистая и опрятная.",
        transcription: "юр рум из нау клин энд тай-ди",
      },
      [lang.ua]: {
        name: "Ваша кімната тепер чиста і охайна.",
        transcription: "юр рум із нау клін енд тай-ді",
      },
      [lang.es]: {
        name: "Su habitación está ahora limpia y ordenada.",
        transcription: "yur rum iz nau clin end tai-di",
      },
      [lang.bg]: {
        name: "Стаята ви вече е чиста и подредена.",
        transcription: "юр рум из нау клин енд тай-ди",
      },
      [lang.hi]: {
        name: "आपका कमरा अब साफ और सुव्यवस्थित है।",
        transcription: "योर रूम इज़ नाउ क्लीन एंड टाइ-डी",
      },
    },
  },
  {
    id: 74,
    name: "Have a pleasant day!",
    categories: [categories.sentences],
    translation: {
      [lang.ro]: {
        name: "Să aveți o zi plăcută!",
        transcription: "hav a ple-zant dei!",
      },
      [lang.ru]: {
        name: "Приятного дня!",
        transcription: "хав э пле-зант дэй!",
      },
      [lang.ua]: {
        name: "Приємного дня!",
        transcription: "хав а пле-зант дей!",
      },
      [lang.es]: {
        name: "¡Que tenga un día agradable!",
        transcription: "hav a ple-sant dei!",
      },
      [lang.bg]: {
        name: "Приятен ден!",
        transcription: "хав а пле-зант дей!",
      },
      [lang.hi]: {
        name: "आपका दिन शुभ हो!",
        transcription: "हैव अ प्लेज-न्ट डे!",
      },
    },
  },
  {
    id: 66,
    name: "Good afternoon! Would you like your room serviced?",
    categories: [categories.sentences],
    translation: {
      [lang.ro]: {
        name: "Bună ziua! Doriți să vă aranjăm camera?",
        transcription: "gud af-ter-nun! wud yoo laik yur rum sur-vist?",
      },
      [lang.ru]: {
        name: "Добрый день! Хотите, чтобы вашу комнату убрали?",
        transcription: "гуд аф-тер-нун! вуд ю лайк юр рум сёр-вист?",
      },
      [lang.ua]: {
        name: "Добрий день! Бажаєте прибирання кімнати?",
        transcription: "гуд аф-тер-нун! вуд ю лайк юр рум сер-віст?",
      },
      [lang.es]: {
        name: "¡Buenas tardes! ¿Le gustaría que arregláramos su habitación?",
        transcription: "gud af-ter-nun! wud yu laik yur rum ser-vist?",
      },
      [lang.bg]: {
        name: "Добър ден! Желаете ли стаята ви да бъде почистена?",
        transcription: "гуд аф-тър-нун! ууд ю лайк юр рум сър-вист?",
      },
      [lang.hi]: {
        name: "शुभ दोपहर! क्या आप अपने कमरे में सेवा करवाना चाहेंगे?",
        transcription: "गुड आफ-टर-नून! वुड यू लाइक योर रूम सर-विस्ड?",
      },
    },
  },
  {
    id: 67,
    name: "Good evening. Do you need fresh towels?",
    categories: [categories.sentences],
    translation: {
      [lang.ro]: {
        name: "Bună seara. Aveți nevoie de prosoape curate?",
        transcription: "gud iv-ning. doo yoo nid fresh tau-els?",
      },
      [lang.ru]: {
        name: "Добрый вечер. Вам нужны свежие полотенца?",
        transcription: "гуд ив-нинг. ду ю нид фреш тау-элс?",
      },
      [lang.ua]: {
        name: "Добрий вечір. Вам потрібні свіжі рушники?",
        transcription: "гуд ів-нінг. ду ю нід фреш руш-никс?", // used рушникс for towels
      },
      [lang.es]: {
        name: "Buenas noches. ¿Necesita toallas limpias?",
        transcription: "gud iv-ning. du yu nid fresh to-a-yas?", // used toayas for towels
      },
      [lang.bg]: {
        name: "Добър вечер. Имате ли нужда от чисти хавлии?",
        transcription: "гуд ив-нинг. ду ю нийд фреш хав-лии?", // used хавлии for towels
      },
      [lang.hi]: {
        name: "शुभ संध्या। क्या आपको नए तौलिये चाहिए?",
        transcription: "गुड ईव-निंग. डू यू नीड फ्रेश तौ-लिये?", // used तौलिए for towels
      },
    },
  },
  {
    id: 68,
    name: "I am here to refresh your room.",
    categories: [categories.sentences],
    translation: {
      [lang.ro]: {
        name: "Sunt aici să vă reîmprospătez camera.",
        transcription: "ai am hir tu ri-fresh yur rum",
      },
      [lang.ru]: {
        name: "Я здесь, чтобы обновить вашу комнату.",
        transcription: "ай эм хир ту ри-фреш юр рум",
      },
      [lang.ua]: {
        name: "Я тут, щоб оновити вашу кімнату.",
        transcription: "ай ем хір ту рі-фреш юр рум",
      },
      [lang.es]: {
        name: "Estoy aquí para refrescar su habitación.",
        transcription: "ai am hir tu ri-fresh yur rum",
      },
      [lang.bg]: {
        name: "Тук съм, за да освежа стаята ви.",
        transcription: "ай ем хир ту ри-фреш юр рум",
      },
      [lang.hi]: {
        name: "मैं आपका कमरा ताज़ा करने के लिए यहाँ हूँ।",
        transcription: "आई एम हियर टू री-फ्रेश योर रूम",
      },
    },
  },
  {
    id: 69,
    name: "Would you like your bed changed?",
    categories: [categories.sentences],
    translation: {
      [lang.ro]: {
        name: "Doriți să vă schimbăm lenjeria de pat?",
        transcription: "wud yoo laik yur bed cheinjd?",
      },
      [lang.ru]: {
        name: "Хотите, чтобы сменили постельное белье?",
        transcription: "вуд ю лайк юр бед чейнджд?",
      },
      [lang.ua]: {
        name: "Бажаєте змінити постіль?",
        transcription: "вуд ю лайк юр бед чейнджд?",
      },
      [lang.es]: {
        name: "¿Le gustaría que le cambiaran la cama?",
        transcription: "wud yu laik yur bed cheinjd?",
      },
      [lang.bg]: {
        name: "Желаете ли да ви сменим чаршафите?",
        transcription: "ууд ю лайк юр бед чейнджд?",
      },
      [lang.hi]: {
        name: "क्या आप अपना बिस्तर बदलवाना चाहेंगे?",
        transcription: "वुड यू लाइक योर बेड चेंज्ड?",
      },
    },
  },
  {
    id: 70,
    name: "Do you need more amenities like soap or shampoo?",
    categories: [categories.sentences],
    translation: {
      [lang.ro]: {
        name: "Aveți nevoie de mai multe articole de toaletă, cum ar fi săpun sau șampon?",
        transcription: "doo yoo nid mor a-men-i-tiz laik sohp or sham-poo?",
      },
      [lang.ru]: {
        name: "Вам нужны дополнительные принадлежности, такие как мыло или шампунь?",
        transcription: "ду ю нид мор а-мен-и-тиз лайк соуп ор шам-пунь?",
      },
      [lang.ua]: {
        name: "Вам потрібно більше зручностей, таких як мило чи шампунь?",
        transcription: "ду ю нід мор а-мен-і-тіз лайк соуп ор шам-пунь?",
      },
      [lang.es]: {
        name: "¿Necesita más artículos de tocador como jabón o champú?",
        transcription: "du yu nid mor a-men-i-tiz laik soap or sham-pu?",
      },
      [lang.bg]: {
        name: "Имате ли нужда от повече консумативи като сапун или шампоан?",
        transcription: "ду ю нийд мор а-мен-и-тийз лайк са-пун ор шам-поан?",
      },
      [lang.hi]: {
        name: "क्या आपको साबुन या शैम्पू जैसी और सुविधाएं चाहिए?",
        transcription: "डू यू नीड मोर ए-मे-नि-टीज़ लाइक सोप और शैम्पू?",
      },
    },
  },
  {
    id: 71,
    name: "I can bring you extra pillows/blankets.",
    categories: [categories.sentences],
    translation: {
      [lang.ro]: {
        name: "Vă pot aduce perne/pături suplimentare.",
        transcription: "ai kan bring yoo eks-tra pi-lous/blang-kets",
      },
      [lang.ru]: {
        name: "Я могу принести вам дополнительные подушки/одеяла.",
        transcription: "ай кан бринг ю экс-тра пи-лоус/блэн-кетс",
      },
      [lang.ua]: {
        name: "Я можу принести вам додаткові подушки/ковдри.",
        transcription: "ай кан брінг ю екс-тра пі-лоус/ков-дрі", // used ковдри for blankets
      },
      [lang.es]: {
        name: "Puedo traerle almohadas/mantas adicionales.",
        transcription: "ai kan bring yu eks-tra pi-lous/blan-kets",
      },
      [lang.bg]: {
        name: "Мога да ви донеса допълнителни възглавници/одеяла.",
        transcription: "ай кан бринг ю екс-тра въз-глав-ници/оде-яла", // used възглавници/одеяла
      },
      [lang.hi]: {
        name: "मैं आपको अतिरिक्त तकिए/कंबल ला सकता हूँ।",
        transcription: "आई कैन ब्रिंग यू एक्स-ट्रा पि-लोज़/ब्लैं-केट्स",
      },
    },
  },
  {
    id: 72,
    name: "Is there anything else I can get for you?",
    categories: [categories.sentences],
    translation: {
      [lang.ro]: {
        name: "Mai este ceva ce vă pot aduce?",
        transcription: "iz ther en-ee-thing els ai kan get for yoo?",
      },
      [lang.ru]: {
        name: "Могу ли я еще что-нибудь для вас принести?",
        transcription: "из зер эни-синг элс ай кан гет фор ю?",
      },
      [lang.ua]: {
        name: "Чи є ще щось, що я можу принести для вас?",
        transcription: "із зер ені-сінг елс ай кан гет фор ю?",
      },
      [lang.es]: {
        name: "¿Hay algo más en lo que pueda ayudarle?",
        transcription: "iz der en-i-thing els ai kan get for yu?",
      },
      [lang.bg]: {
        name: "Има ли нещо друго, което мога да ви донеса?",
        transcription: "из зер е-ни-тинг елс ай кан гет фор ю?",
      },
      [lang.hi]: {
        name: "क्या मैं आपके लिए कुछ और ला सकता हूँ?",
        transcription: "इज़ देअर एनी-थिंग एल्स आई कैन गेट फॉर यू?",
      },
    },
  },
  {
    id: 73,
    name: "Your room is now clean and tidy.",
    categories: [categories.sentences],
    translation: {
      [lang.ro]: {
        name: "Camera dumneavoastră este acum curată și ordonată.",
        transcription: "yur rum iz nau klin end tai-di",
      },
      [lang.ru]: {
        name: "Ваша комната теперь чистая и опрятная.",
        transcription: "юр рум из нау клин энд тай-ди",
      },
      [lang.ua]: {
        name: "Ваша кімната тепер чиста і охайна.",
        transcription: "юр рум із нау клін енд тай-ді",
      },
      [lang.es]: {
        name: "Su habitación está ahora limpia y ordenada.",
        transcription: "yur rum iz nau clin end tai-di",
      },
      [lang.bg]: {
        name: "Стаята ви вече е чиста и подредена.",
        transcription: "юр рум из нау клин енд тай-ди",
      },
      [lang.hi]: {
        name: "आपका कमरा अब साफ और सुव्यवस्थित है।",
        transcription: "योर रूम इज़ नाउ क्लीन एंड टाइ-डी",
      },
    },
  },
  {
    id: 74,
    name: "Have a pleasant day!",
    categories: [categories.sentences],
    translation: {
      [lang.ro]: {
        name: "Să aveți o zi plăcută!",
        transcription: "hav a ple-zant dei!",
      },
      [lang.ru]: {
        name: "Приятного дня!",
        transcription: "хав э пле-зант дэй!",
      },
      [lang.ua]: {
        name: "Приємного дня!",
        transcription: "хав а пле-зант дей!",
      },
      [lang.es]: {
        name: "¡Que tenga un día agradable!",
        transcription: "hav a ple-sant dei!",
      },
      [lang.bg]: {
        name: "Приятен ден!",
        transcription: "хав а пле-зант дей!",
      },
      [lang.hi]: {
        name: "आपका दिन शुभ हो!",
        transcription: "हैव अ प्लेज-न्ट डे!",
      },
    },
  },
].filter((el) => el.id)

testData.list = [...testData.list, ...sentences]

let newWords = [
  {
    name: "tap",
    categories: [categories.bathroom],
    translation: {
      [lang.ro]: {
        name: "robinet 💧",
        transcription: "tap",
      },
      [lang.ru]: {
        name: "кран 💧",
        transcription: "тап",
      },
      [lang.ua]: {
        name: "кран 💧",
        transcription: "тап",
      },
      [lang.es]: {
        name: "grifo 💧",
        transcription: "tap",
      },
      [lang.bg]: {
        name: "кран 💧",
        transcription: "тап",
      },
      [lang.hi]: {
        name: "नल 💧",
        transcription: "टैप",
      },
    },
  },
  {
    name: "report damaged sink",
    categories: [categories.damages, categories.requests],
    translation: {
      [lang.ro]: {
        name: "raportează chiuveta deteriorată",
        transcription: "ri-port dem-ij-d sink",
      },
      [lang.ru]: {
        name: "сообщить о поврежденной раковине",
        transcription: "ри-порт дэм-иджд синк",
      },
      [lang.ua]: {
        name: "повідомити про пошкоджену раковину",
        transcription: "рі-порт деміджд сінк",
      },
      [lang.es]: {
        name: "reportar lavabo dañado",
        transcription: "ri-port dam-ajd sink",
      },
      [lang.bg]: {
        name: "докладвайте повреден умивалник",
        transcription: "ри-порт де-миджд синк",
      },
      [lang.hi]: {
        name: "क्षतिग्रस्त सिंक की रिपोर्ट करें",
        transcription: "रिपोर्ट डैमेज्ड सिंक",
      },
    },
  },
  {
    name: "report damaged air conditioning",
    categories: [categories.damages, categories.requests],
    translation: {
      [lang.ro]: {
        name: "raportează aerul condiționat deteriorat",
        transcription: "ri-port dem-ij-d air con-di-shun-ing",
      },
      [lang.ru]: {
        name: "сообщить о поврежденном кондиционере",
        transcription: "ри-порт дэм-иджд эир кон-ди-шни-нг",
      },
      [lang.ua]: {
        name: "повідомити про пошкоджений кондиціонер",
        transcription: "рі-порт деміджд еир кон-ді-шни-нг",
      },
      [lang.es]: {
        name: "reportar aire acondicionado dañado",
        transcription: "ri-port dam-ajd air con-di-shun-ing",
      },
      [lang.bg]: {
        name: "докладвайте повреден климатик",
        transcription: "ри-порт де-миджд еър кон-ди-шъ-нинг",
      },
      [lang.hi]: {
        name: "क्षतिग्रस्त एयर कंडीशनिंग की रिपोर्ट करें",
        transcription: "रिपोर्ट डैमेज्ड एयर कंडीशनिंग",
      },
    },
  },
  {
    name: "report carpet stains",
    categories: [categories.damages, categories.requests],
    translation: {
      [lang.ro]: {
        name: "raportează pete pe covor",
        transcription: "ri-port kar-pet steinz",
      },
      [lang.ru]: {
        name: "сообщить о пятнах на ковре",
        transcription: "ри-порт кар-пет стэйнз",
      },
      [lang.ua]: {
        name: "повідомити про плями на килимі",
        transcription: "рі-порт кар-пет стейнз",
      },
      [lang.es]: {
        name: "reportar manchas en la alfombra",
        transcription: "ri-port car-pet stains",
      },
      [lang.bg]: {
        name: "докладвайте петна по килима",
        transcription: "ри-порт кар-пет стейнз",
      },
      [lang.hi]: {
        name: "कालीन के दागों की रिपोर्ट करें",
        transcription: "रिपोर्ट कारपेट स्टेंस",
      },
    },
  },

  {
    id: 77,
    name: "The heating is not working.",
    categories: [categories.damages, categories.requests],
    translation: {
      [lang.ro]: {
        name: "Încălzirea nu funcționează.",
        transcription: "dhə hee-ting iz not wăr-king",
      },
      [lang.ru]: {
        name: "Отопление не работает.",
        transcription: "зэ хи-тинг из нот во-ркинг",
      },
      [lang.ua]: {
        name: "Опалення не працює.",
        transcription: "зе хі-тінг із нот воркінг",
      },
      [lang.es]: {
        name: "La calefacción no funciona.",
        transcription: "dhe hee-ting is not wer-king",
      },
      [lang.bg]: {
        name: "Отоплението не работи.",
        transcription: "дъ хий-тинг из нот уър-кинг",
      },
      [lang.hi]: {
        name: "हीटिंग काम नहीं कर रही है।",
        transcription: "द हीटिंग इज नॉट वर्किंग",
      },
    },
  },
  {
    id: 78,
    name: "There's a flickering light in the bathroom.",
    categories: [categories.damages, categories.requests],
    translation: {
      [lang.ro]: {
        name: "Există o lumină pâlpâitoare în baie.",
        transcription: "dherz a flik-ăr-ing lait in dhə bath-rum",
      },
      [lang.ru]: {
        name: "В ванной мигает свет.",
        transcription: "зэрз э фли-ке-ринг лайт ин зэ бас-рум",
      },
      [lang.ua]: {
        name: "У ванній кімнаті блимає світло.",
        transcription: "зерз а флікерінг лайт ін зе бас-рум",
      },
      [lang.es]: {
        name: "Hay una luz parpadeante en el baño.",
        transcription: "dherz a flik-er-ing lait in the bath-rum",
      },
      [lang.bg]: {
        name: "Има мигаща светлина в банята.",
        transcription: "дерз ъ флик-ъ-ринг лайт ин дъ бат-руум",
      },
      [lang.hi]: {
        name: "बाथरूम में एक झिलमिलाती रोशनी है।",
        transcription: "देयर इज़ अ फ्लिकरिंग लाइट इन द बाथरूम",
      },
    },
  },
  {
    id: 79,
    name: "The air conditioning is not working.",
    categories: [categories.damages, categories.requests],
    translation: {
      [lang.ro]: {
        name: "Aerul condiționat nu funcționează.",
        transcription: "dhə air con-di-shun-ing iz not wăr-king",
      },
      [lang.ru]: {
        name: "Кондиционер не работает.",
        transcription: "зэ эир кон-ди-шни-нг из нот во-ркинг",
      },
      [lang.ua]: {
        name: "Кондиціонер не працює.",
        transcription: "зе еир кон-ді-шни-нг із нот воркінг",
      },
      [lang.es]: {
        name: "El aire acondicionado no funciona.",
        transcription: "dhe air con-di-shun-ing is not wer-king",
      },
      [lang.bg]: {
        name: "Климатикът не работи.",
        transcription: "дъ еър кон-ди-шъ-нинг из нот уър-кинг",
      },
      [lang.hi]: {
        name: "एयर कंडीशनिंग काम नहीं कर रहा है।",
        transcription: "द एयर कंडीशनिंग इज नॉट वर्किंग",
      },
    },
  },
  {
    id: 80,
    name: "I've found a stain on the carpet.",
    categories: [categories.damages, categories.requests],
    translation: {
      [lang.ro]: {
        name: "Am găsit o pată pe covor.",
        transcription: "aiv faund a stein on dhə kar-pet",
      },
      [lang.ru]: {
        name: "Я нашел(ла) пятно на ковре.",
        transcription: "айв фаунд э стэйн он зэ кар-пет",
      },
      [lang.ua]: {
        name: "Я знайшов(ла) пляму на килимі.",
        transcription: "айв фаунд а стейн он зе кар-пет",
      },
      [lang.es]: {
        name: "He encontrado una mancha en la alfombra.",
        transcription: "aiv faund a stain on the kar-pet",
      },
      [lang.bg]: {
        name: "Намерих петно по килима.",
        transcription: "айв фаунд ъ стейн он дъ кар-пет",
      },
      [lang.hi]: {
        name: "मुझे कालीन पर एक दाग मिला है।",
        transcription: "आईव फाउंड अ स्टेन ऑन द कारपेट",
      },
    },
  },
  {
    id: 81,
    name: "The toilet is blocked.",
    categories: [categories.damages, categories.requests],
    translation: {
      [lang.ro]: {
        name: "Toaleta este înfundată.",
        transcription: "dhə toi-let iz blokt",
      },
      [lang.ru]: {
        name: "Туалет засорен.",
        transcription: "зэ той-лет из блокт",
      },
      [lang.ua]: {
        name: "Туалет заблокований.",
        transcription: "зе туалет із блокт",
      },
      [lang.es]: {
        name: "El inodoro está atascado.",
        transcription: "dhe toi-let is blokt",
      },
      [lang.bg]: {
        name: "Тоалетната е запушена.",
        transcription: "дъ той-лет из блокт",
      },
      [lang.hi]: {
        name: "टॉयलेट ब्लॉक है।",
        transcription: "द टॉयलेट इज ब्लॉक्ड",
      },
    },
  },
  {
    id: 82,
    name: "The lamp on the bedside table is broken.",
    categories: [categories.damages, categories.requests],
    translation: {
      [lang.ro]: {
        name: "Lampa de pe noptieră este stricată.",
        transcription: "dhə lamp on dhə bed-said tei-băl iz bro-kăn",
      },
      [lang.ru]: {
        name: "Лампа на прикроватной тумбочке сломана.",
        transcription: "зэ ламп он зэ бэд-сайд тэй-бл из бро-кен",
      },
      [lang.ua]: {
        name: "Лампа на тумбочці зламана.",
        transcription: "зе ламп он зе бед-сайд тейбл із броукен",
      },
      [lang.es]: {
        name: "La lámpara de la mesita de noche está rota.",
        transcription: "dhe lamp on the bed-said tei-bel is bro-ken",
      },
      [lang.bg]: {
        name: "Лампата на нощното шкафче е счупена.",
        transcription: "дъ ламп он дъ бед-сайд тей-бъл из бро-кън",
      },
      [lang.hi]: {
        name: "बेडसाइड टेबल पर रखा लैंप टूटा हुआ है।",
        transcription: "द लैंप ऑन द बेडसाइड टेबल इज ब्रोकेन",
      },
    },
  },
  {
    id: 83,
    name: "There's a hole in the duvet cover.",
    categories: [categories.damages, categories.requests],
    translation: {
      [lang.ro]: {
        name: "Este o gaură în husa de plapumă.",
        transcription: "dherz a houl in dhə du-vei kuv-ăr",
      },
      [lang.ru]: {
        name: "В пододеяльнике дырка.",
        transcription: "зэрз э хоул ин зэ ду-вэй кав-ер",
      },
      [lang.ua]: {
        name: "У підковдрі дірка.",
        transcription: "зерз а хоул ін зе ду-вей кавер",
      },
      [lang.es]: {
        name: "Hay un agujero en la funda nórdica.",
        transcription: "dherz a hol in the du-vet cov-er",
      },
      [lang.bg]: {
        name: "Има дупка в плика за завивка.",
        transcription: "дерз ъ хоул ин дъ ду-вей къв-ър",
      },
      [lang.hi]: {
        name: "दूवेट कवर में एक छेद है।",
        transcription: "देयर इज़ अ होल इन द दूवेट कवर",
      },
    },
  },
  {
    id: 84,
    name: "The TV remote control is not functioning.",
    categories: [categories.damages, categories.requests],
    translation: {
      [lang.ro]: {
        name: "Telecomanda TV nu funcționează.",
        transcription: "dhə ti-vi ri-mout kən-trol iz not fank-shun-ing",
      },
      [lang.ru]: {
        name: "Пульт дистанционного управления телевизором не работает.",
        transcription: "зэ ти-ви ри-моут кон-трол из нот фанк-шо-нинг",
      },
      [lang.ua]: {
        name: "Пульт дистанційного керування телевізором не працює.",
        transcription: "зе ті-ві рі-моут контрол із нот фанкшенінг",
      },
      [lang.es]: {
        name: "El control remoto del televisor no funciona.",
        transcription: "dhe ti-vi ri-mot con-trol is not fank-shun-ing",
      },
      [lang.bg]: {
        name: "Дистанционното управление на телевизора не работи.",
        transcription: "дъ ти-ви ри-моут кън-трол из нот фънк-шъ-нинг",
      },
      [lang.hi]: {
        name: "टीवी रिमोट कंट्रोल काम नहीं कर रहा है।",
        transcription: "द टीवी रिमोट कंट्रोल इज नॉट फंक्शनिंग",
      },
    },
  },
  {
    id: 85,
    name: "One of the chairs in the room is damaged.",
    categories: [categories.damages, categories.requests],
    translation: {
      [lang.ro]: {
        name: "Unul dintre scaunele din cameră este deteriorat.",
        transcription: "uăn ov dhə chers in dhə rum iz dem-ij-d",
      },
      [lang.ru]: {
        name: "Один из стульев в комнате поврежден.",
        transcription: "ван ов зэ черз ин зэ рум из дэм-иджд",
      },
      [lang.ua]: {
        name: "Один зі стільців у кімнаті пошкоджений.",
        transcription: "ван ов зе черз ін зе рум із деміджд",
      },
      [lang.es]: {
        name: "Una de las sillas de la habitación está dañada.",
        transcription: "uon ov the chers in the rum is dam-ajd",
      },
      [lang.bg]: {
        name: "Един от столовете в стаята е повреден.",
        transcription: "уан ов дъ чеърз ин дъ руум из де-миджд",
      },
      [lang.hi]: {
        name: "कमरे में एक कुर्सी क्षतिग्रस्त है।",
        transcription: "वन ऑफ़ द चेयर्स इन द रूम इज डैमेज्ड",
      },
    },
  },
  {
    id: 86,
    name: "The showerhead is faulty.",
    categories: [categories.damages, categories.requests],
    translation: {
      [lang.ro]: {
        name: "Capul de duș este defect.",
        transcription: "dhə shau-ăr-hed iz fol-ti",
      },
      [lang.ru]: {
        name: "Лейка душа неисправна.",
        transcription: "зэ шау-эр-хед из фол-ти",
      },
      [lang.ua]: {
        name: "Душова насадка несправна.",
        transcription: "зе шау-ер-хед із фолті",
      },
      [lang.es]: {
        name: "El cabezal de la ducha está defectuoso.",
        transcription: "dhe shau-er-hed is fol-ti",
      },
      [lang.bg]: {
        name: "Душ слушалката е дефектна.",
        transcription: "дъ шау-ър-хед из фол-ти",
      },
      [lang.hi]: {
        name: "शॉवरहेड खराब है।",
        transcription: "द शावरहेड इज फॉल्टी",
      },
    },
  },
]

testData.list = [...testData.list, ...newWords]

function Database(testData) {
  let data = testData

  return {
    get All() {
      console.log("data received: ", data)
      return data.list
    },
    getAllByProperty: (property) => data?.list.map((item) => item[property]),
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
