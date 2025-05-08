import express from "express"
import path from "path"
const app = express()
const PORT = 3000

const __rootFolder = process.cwd()
const fullPath = path.join(__rootFolder, "public")

app.use(express.static(path.join(__rootFolder, "public")))

app.get("/", (req, res) => {
  res.sendFile(path.join(fullPath, "index.html"))
})

app.listen(PORT, () => {
  console.log(`Listening on: localhost:${PORT}`)
})
