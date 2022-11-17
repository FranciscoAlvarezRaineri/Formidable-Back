const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const bodyparser = require("body-parser")
const router = require("./api/routes")
const cors = require("cors");





const connectDB = require("./api/database/connection")

const app = express()


dotenv.config({ path: "config.env" })
const PORT = process.env.PORT || 8080

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));


//log requests
app.use(morgan("tiny"))

//mongoDB connection
connectDB()

//parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())



app.use("/api", router);




app.listen(PORT, () => { console.log(`Server running on http://localhost:${PORT}`); })