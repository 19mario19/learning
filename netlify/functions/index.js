import serverless from "serverless-http"
import express from "express"
import path from "path"

const __rootFolder = process.cwd()
const fullPath = path.join(__rootFolder, "public")

const app = express()
const router = express.Router()

app.use(express.static(path.join(__rootFolder, "public")))

app.get("/", (req, res) => {
  res.sendFile(path.join(fullPath, "index.html"))
})


app.use("/.netlify/functions/server", router)

export const handler = serverless(app)
