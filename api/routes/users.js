const express = require("express")
const router = express.Router()


const controllers = require("../controllers/userController")


//API
router.post("/create", controllers.create)

//all users
router.get("/", controllers.getUsers)


// router.put("/users/:id", controllers.update)
// router.delete("/users/:id", controllers.delete)



module.exports = router