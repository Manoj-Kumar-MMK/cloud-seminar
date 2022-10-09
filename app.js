const express = require("express")
const cors = require("cors")
const config = require("./config")
const morgan = require("morgan")

const app = express()
const PORT = process.env.PORT || config.server.port

app.use(morgan("dev"))
app.use(express.json({ limit: "10mb" }))
app.use(cors())

const s3h = require("./s3")
app.get("/", (req, res) => {
	res.status(200).json({ mode: "Testing mode" })
})
app.post(
	"/",
	s3h.file_upload({ folder: "images", field: "image" }),
	(req, res) => {
		res.status(200).json({ image_id: "4324.jpg" })
	}
)

app.listen(PORT, () => console.log(`SERVER STARTED AT----${PORT}\n\n`))
