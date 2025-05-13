import express from "express"
import path from "path"
const app = express()
const PORT = 3000

const __rootFolder = process.cwd()
const fullPath = path.join(__rootFolder, "public")
app.use(express.static(path.join(__rootFolder, "public")))

const router = express.Router()

app.get("/", (req, res) => {
  res.sendFile(path.join(fullPath, "index.html"))
})


//api
router.get("/test", (req, res) => res.json(db.getAll()))

app.use("/api", router)
app.listen(PORT, () => {
  console.log(`Listening on: localhost:${PORT}`)
})
