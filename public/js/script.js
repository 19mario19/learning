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
  console.log(storeLang.getObservables())
  console.log("Languages was changed to: ", data)
})

storeData.subscribe((data) => {
  console.log(storeData.getObservables())
  console.log("Data was changed to: ", data)
})

storeCategory.subscribe((data) => {
  document.title = storeLang.value + " | " + storeCategory.value
  console.log("Category was changed to: ", data)
  console.log(storeCategory.getObservables())
})

// initialisation on load
storeLang.value = JSON.parse(localStorage.getItem("lang")) || "ro"
storeCategory.value = JSON.parse(localStorage.getItem("category")) || "all" 
storeData.value = db.All

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

    // click on the language
    li.addEventListener("click", () => {
      // set value of store language
      storeLang.value = language
      localStorage.setItem("lang", JSON.stringify(storeLang.value))
    })
  }

  // displaying categories
  const ulCategories = document.createElement("ul")
  nav.appendChild(ulCategories)
  for (let category of Object.values(categories)) {
    const li = document.createElement("li")
    ulCategories.appendChild(li)

    li.textContent = category.translation[storeLang.value]
    // attaching all categories to storeLang. Need to deal with it...
    storeLang.subscribe(() => {
      li.textContent = category.translation[storeLang.value]
    })

    // click the category
    li.addEventListener("click", () => {
      // triggers store category
      storeCategory.value = category.name
      localStorage.setItem("category", JSON.stringify(category.name))

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

  root.insertBefore(container, root.firstChild)
}

function WordComponent(element, appendTo) {
  const li = document.createElement("li")
  li.textContent = `${element.name} - ${element.translation[storeLang.value]}`
  appendTo.appendChild(li)
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
