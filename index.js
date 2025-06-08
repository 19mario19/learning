import express from "express"
import path from "path"
import { DictService } from "./services/DictService.js"
const app = express()
const PORT = 3000

const __rootFolder = process.cwd()
const fullPath = path.join(__rootFolder, "public")
app.use(express.static(path.join(__rootFolder, "public")))

const router = express.Router()

app.get("/", (req, res) => {
  res.sendFile(path.join(fullPath, "index.html"))
})

// const dict = DictService()
//api
// router.get("/test", async (req, res) => {
//   let data = (await dict).getAll().filter((el) => el)

//   return res.json({ data })
// })

app.use("/api", router)
app.listen(PORT, () => {
  console.log(`Listening on: localhost:${PORT}`)
})
