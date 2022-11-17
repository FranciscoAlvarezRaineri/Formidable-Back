const express = require("express")
const router = express.Router()


const controllers = require("../controllers/formController")


//API
router.post("/create", controllers.create)

//traigo todos los forms
router.get("/", controllers.getForms)
// router.put("/users/:id", controllers.update)
// router.delete("/users/:id", controllers.delete)





module.exports = router