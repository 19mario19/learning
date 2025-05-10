import { store } from "../reactive/observable.js"
import { newDatabase, categories, lang as languages } from "../data/data.js"

// database
const db = newDatabase()

// stores
const storeLang = store.lang
const storeData = store.data
const storeCategory = store.currentCategory

// top subscribtions
storeLang.subscribe((data) => {
  document.title = data + " | " + storeCategory.value
  // console.log(storeLang.getObservables())
  // console.log("Languages was changed to: ", data)
})

storeData.subscribe((data) => {
  // console.log(storeData.getObservables())
  // console.log("Data was changed to: ", data)
})

storeCategory.subscribe((data) => {
  document.title = storeLang.value + " | " + storeCategory.value
  // console.log("Category was changed to: ", data)
  // console.log(storeCategory.getObservables())
})

// initialisation on load
storeLang.value = JSON.parse(localStorage.getItem("lang")) || "ro"
storeCategory.value = JSON.parse(localStorage.getItem("category")) || "all"
storeData.value = db.ByCategory(storeCategory.value)

// functions
function navbar(root) {
  const nav = document.createElement("nav")

  // displaying languages
  const ul = document.createElement("ul")
  ul.className = "lang"
  nav.appendChild(ul)
  for (let language of Object.values(languages)) {
    const li = document.createElement("li")
    ul.appendChild(li)
    li.textContent = language

    console.log(language, storeLang.value)
    if (language === storeLang.value) li.classList.add("active")

    // click on the language
    li.addEventListener("click", () => {
      // set value of store language
      storeLang.value = language
      document.querySelector("ul.lang li.active")?.classList.remove("active")
      li.classList.add("active")
      localStorage.setItem("lang", JSON.stringify(storeLang.value))
    })
  }

  // displaying categories
  const ulCategories = document.createElement("ul")
  ulCategories.classList.add("categories")
  nav.appendChild(ulCategories)
  for (let category of Object.values(categories)) {
    const li = document.createElement("li")
    ulCategories.appendChild(li)

    li.textContent = category.translation[storeLang.value]
    // attaching all categories to storeLang. Need to deal with it...
    storeLang.subscribe(() => {
      li.textContent = category.translation[storeLang.value]
    })

    console.log("comparing categories", category, storeCategory.value)
    if (category.name === storeCategory.value) li.classList.add("active")

    // click the category
    li.addEventListener("click", () => {
      // triggers store category
      storeCategory.value = category.name
      localStorage.setItem("category", JSON.stringify(category.name))

      document
        .querySelector("ul.categories li.active")
        ?.classList.remove("active")

      li.classList.add("active")

      console.log(db.ByCategory(category))
      // this triggers a re-run of subscribed functions
      storeData.value = db.ByCategory(category)
    })
  }

  // keep last
  root.insertBefore(nav, root.firstChild)
}

const ulWord = document.createElement("ul")
document.querySelector("main").appendChild(ulWord)

function displayingData(root) {
  const container = document.createElement("div")

  // initial
  ListWordsComponent(storeData.value)

  // reacting to change
  storeLang.subscribe(() => {
    ListWordsComponent(storeData.value)
  })

  storeData.subscribe(() => {
    ListWordsComponent(storeData.value)
  })

  storeCategory.subscribe(() => {
    ListWordsComponent(storeData.value)
  })

  root.insertBefore(container, root.firstChild)
}

function WordComponent(element, appendTo) {
  console.log("Element taken in is:", element)
  const li = document.createElement("li")
  appendTo.appendChild(li)

  const wrapper = document.createElement("div")
  wrapper.classList.add("component")
  li.appendChild(wrapper)

  const top = document.createElement("div")
  top.classList.add("top")
  const span = document.createElement("span")
  const en = document.createElement("p")
  en.textContent = `${element?.name} / [${
    element?.translation[storeLang.value]?.transcription ?? element.name
  }]`
  const translation = document.createElement("p")
  translation.textContent = element.translation[storeLang.value].name
  span.append(en, translation)
  top.appendChild(span)

  const mid = document.createElement("div")
  mid.classList.add("mid")
  // show categories
  const ul = document.createElement("ul")
  ul.classList.add("category")
  mid.appendChild(ul)
  for (let category of element.categories) {
    const li = document.createElement("li")
    li.textContent = category.name
    ul.appendChild(li)
    // set store category value
    li.addEventListener("click", () => {
      storeCategory.value = category.name
      storeData.value = db.ByCategory(category)
    })
  }

  const bot = document.createElement("div")
  bot.classList.add("bot")

  const googleLink = document.createElement("a")
  googleLink.classList.add("google")
  googleLink.textContent = `google`
  googleLink.href = `https://translate.google.co.uk/?sl=auto&tl=${storeLang.value}&text=${element.name}&op=translate`
  googleLink.target = "_blank"
  googleLink.rel = "noopener noreferrer"
  googleLink.setAttribute(
    "aria-label",
    `View ${element.name} in Google Translate`,
  )

  const merriamLink = document.createElement("a")
  merriamLink.classList.add("merriam")
  merriamLink.textContent = `merriam-webster`
  merriamLink.href = `https://www.merriam-webster.com/dictionary/${element.name}`
  merriamLink.target = "_blank"
  merriamLink.rel = "noopener noreferrer"
  merriamLink.setAttribute(
    "aria-label",
    `View ${element.name} in Merriam Webster`,
  )

  bot.append(googleLink, merriamLink)

  wrapper.append(top, mid, bot)
}

function ListWordsComponent(list) {
  ulWord.innerHTML = ""
  for (let item of list) {
    WordComponent(item, ulWord)
  }
}

window.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded...")

  const app = document.querySelector("#app")

  displayingData(app)
  // keep last
  navbar(app)
})
