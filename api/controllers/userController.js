var User = require("../models/User");
const { generateToken } = require("../config/tokens");
const userService = require("../services/userService");
const email = require("../utils/mailer");

// //create new user
exports.create = (req, res) => {
  //validate
  if (!req.body) {
    return res.status(400).send({ message: "Content can not be empty" });
  }
  //new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  //save user in dataBase
  user
    .save()
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating a create operation",
      })
    );
};

//get all users
exports.getUsers = (req, res) => {
  User.find()
    .then((users) => res.status(200).send(users))
    .catch((err) => res.status(400).send(err));
};

//traer un usuario por id
exports.getOneUser = (req, res) => {
  const id = req.params.id;
  User.findOne({ id }).then((user) => res.status(200).send(user));
};

//logIn user
exports.loginUsers = async (req, res) => {
  const { email, password } = req.body;
  userService
    .login(email, password)
    .then((payload) => {
      res.send(payload);
    })
    .catch((err) => res.status(401).send(String(err)));
};

//logOut user
exports.logoutUsers = (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
};

//Modificar usuario

exports.updateUser = (req, res) => {
  const { id } = req.params.id;
  const body = req.body;
  User.updateOne({ id }, body)
    .then((usr) => {
      res.send(usr);
    })
    .catch((error) => res.sendStatus(404));
};

//borrar usuario

exports.deleteUser = (req, res) => {
  const { id } = req.params.id;
  User.deleteOne({ id }).then((user) => res.status(200).send(user));
};

//confirma la creación del usuario
exports.sendConfirm = (req, res) => {
  email.confirm(req.body.email, req.body.name, req.body.confimUrl);
};

//Envía el email de confirmación
exports.confirm = (req, res) => {};
