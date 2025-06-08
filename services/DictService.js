import dotenv from "dotenv"
dotenv.config()

const APIKEY = process.env.APIKEY

const words = [
  "towel",
  "shower",
  "bathtub",
  "toilet",
  "sink",
  "shampoo",
  "conditioner",
  "soap",
  "hairdryer",
  "bed",
  "sheets",
  "pillow",
  "pillowcase",
  "blanket",
  "duvet",
  "mattress",
  "mop",
  "broom",
  "dustpan",
  "duster",
  "disinfectant",
  "clean",
  "dirty",
  "stain",
  "trash",
  "pillowcase",
  "hanger",
  "dust",
  "polish",
  "broken",
  "light",
  "tap",
]

/**
 * @param {string} word
 * @param {number} [limit=5]
 * @param {boolean} [includeRelated=false]
 */
async function fetchMeaningWordnik(word, limit = 1) {
  word = word.toLocaleLowerCase()
  if (!word) throw new Error("Please add a word")
  if (!APIKEY) throw new Error("API key needed!")

  const URL_AUDIO = `https://api.wordnik.com/v4/word.json/${word}/audio?useCanonical=false&limit=${limit}&api_key=${APIKEY}`
  try {
    const resAudio = await fetch(URL_AUDIO)

    if (!resAudio.ok) return

    const jsonAudio = await resAudio.json()

    const data = jsonAudio.map((item) => {
      return { word: item.word, audio: item?.fileUrl }
    })

    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}

async function FetchData(query) {
  try {
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`,
    )
    if (!res.ok) throw new Error("Could not fetch the data")

    const data = await res.json()

    return data
  } catch (error) {
    // console.log(`No data for: [${query}]`)
  }
}

async function GetDataForAllWords(data) {
  const output = []

  console.log("Fetching all data for : ", data)
  try {
    for (let word of data) {
      let res = await fetchMeaningWordnik(word)
      console.log("RESPONSE: ",Array.from(res)[0])
      if (!res) return
      output.push(res)
    }
  } catch (error) {
    console.log(error)
  }

  //   console.log(output)

  return output
}

async function DictService() {
  console.log("Dict service started!")
  let data = []
  let output = new Set()
  try {
    data =
      (await GetDataForAllWords(words)).then((data) =>
        console.log("In then: ", data),
      ) || []

    data = data?.filter((item) => item?.audio)

    for (let item of data) {
      if (!item) return

      output.add(item)
    }
  } catch (error) {}

  // console.log(output)

  return {
    getAll: () => {
      Array.from(output)
    },
    getById: (id) => {
      return data?.find((item) => item.id == id)
    },
  }
}

export { DictService }
