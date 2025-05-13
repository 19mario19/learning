const dict = [
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
    id: 2,
    name: "bathtub",
    phonetic: "/ˈbæθtʊb/",
    audio: "",
    meaning:
      "A large container for holding water in which a person may bathe (take a bath).",
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
    id: 5,
    name: "shampoo",
    phonetic: "/ʃamˈpuː/",
    audio: "",
    meaning:
      "A traditional Indian and Persian body massage given after pouring warm water over the body and rubbing it with extracts from herbs.",
  },
  {
    id: 6,
    name: "conditioner",
    phonetic: "",
    audio: "",
    meaning: "Anything that improves the condition of something",
  },
  {
    id: 7,
    name: "body",
    phonetic: "/ˈbɒdi/",
    audio: "https://api.dictionaryapi.dev/media/pronunciations/en/body-uk.mp3",
    meaning: "Physical frame.",
  },
  {
    id: 8,
    name: "wash",
    phonetic: "/wɑʃ/",
    audio: "",
    meaning:
      "The process or an instance of washing or being washed by water or other liquid.",
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
    id: 10,
    name: "hairdryer",
    phonetic: "",
    audio: "",
    meaning:
      "A small electrical appliance for drying hair, by generating a stream of hot air.",
  },
  {
    id: 11,
    name: "bed",
    phonetic: "/bed/",
    audio: "",
    meaning:
      "A piece of furniture, usually flat and soft, on which to rest or sleep.",
  },
  {
    id: 12,
    name: "sheets",
    phonetic: "/ʃiːts/",
    audio: "",
    meaning:
      "A thin bed cloth used as a covering for a mattress or as a layer over the sleeper.",
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
    id: 14,
    name: "pillowcase",
    phonetic: "/ˈpɘlɐʉˌkæes/",
    audio: "",
    meaning: "A washable, easily removable cloth cover for pillows.",
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
  {
    id: 17,
    name: "mattress",
    phonetic: "/ˈmætɹɪs/",
    audio: "",
    meaning:
      "A pad on which a person can recline and sleep, usually having an inner section of coiled springs covered with foam or other cushioning material then enclosed with cloth fabric.",
  },
  {
    id: 18,
    name: "vacuum cleaner",
    phonetic: "",
    audio: "",
    meaning:
      "A domestic or industrial mobile machine for cleaning floors and similar surfaces that draws dust and other particles into a container (a cyclonic type bin, or a filter bag) by the suction created by an electric motor driving a fan.",
  },
  {
    id: 19,
    name: "mop",
    phonetic: "/mɒp/",
    audio: "",
    meaning:
      "An implement for washing floors, or the like, made of a piece of cloth, or a collection of thrums, or coarse yarn, fastened to a handle.",
  },
]




const hasAudio = dict.filter((item) => item.audio)

console.log(hasAudio)


export { dict, hasAudio }
