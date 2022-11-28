const express = require("express");
const router = express.Router();

const controllers = require("../controllers/userController");

//API
router.post("/create", controllers.create);

//all users
router.get("/", controllers.getUsers);

//loguear
router.post("/login", controllers.loginUsers);

//traer un usuario
router.get("/:id", controllers.getOneUser);

//para modificar usuario
router.put("/:id", controllers.updateUser);

//para borrar usuario
router.delete("/:id", controllers.deleteUser);

module.exports = router;
