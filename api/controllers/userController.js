var User = require("../models/User");

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

//loguear usuario
exports.loginUsers = (req, res) => {
  const { email } = req.body;

  User.findOne({ where: { email } }).then((user) => {
    if (!user) return res.sendStatus(401);
    else res.send(user);
  });
};

/* exports.loginUsers = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ where: { email } }).then((user) => {
    if (!user) return res.sendStatus(401);
    user.validatePassword(password).then((valid) => {
      if (!valid) return res.sendStatus(401);

      const payload = {
        name: user.name,
        email: user.email,
      };

      const token = generateToken(payload);
      res.cookie("token", token);
      res.send(payload);
    });
  });
}; */

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
