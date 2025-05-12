import { words } from "../data/words.js"

// console.log(words)

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

  for (let word of data) {
    let res = await FetchData(word)
    if (res) {
      //   console.log(`Word [${word}] was found!`)
      output.push(res)
    }
  }

  //   console.log(output)

  return output
}

async function DictService() {
  let data = (await GetDataForAllWords(words)) || []

  let output = new Set()
  if (data.length > 0) {
    let id = 0
    for (let item of data) {
      console.log(item)

      let object = item[0]

      output.add({
        id,
        name: object.word ?? "",
        // phonetics: object?.phonetics[0]?.text ?? "",
        phonetic: object?.phonetic ?? "",
        audio: object?.phonetics[0]?.audio ?? "",

        meaning: object?.meanings[0]?.definitions[0]?.definition ?? "",
      })
      id++
    }
  }

  return {
    getAll: () => Array.from(output),
    getById: (id) => {
      return data?.find((item) => item.id == id)
    },
  }
}

export { DictService }
