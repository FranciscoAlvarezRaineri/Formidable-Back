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
    .save(user)
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



//loguear usuario
exports.loginUsers = (req, res) => {
  const { email } = req.body;

  User.findOne({ where: { email } })
  .then((user) =>  {
    if (!user) return res.sendStatus(401)
    else alert("bienvenido")
  })
}
    


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

/* exports.updateUser = (req, res) => {
  const { id } = req.params
  const body = req.body
  model.updateOne(
      { id },
      body,
      (err, docs) => {
          res.send({
             
          })
      })
} */


//borrar usuario

/* exports.deleteUser = (req, res) => {
  const { id } = req.params
  model.deleteOne(
      { id,},
      (err, docs) => {
          res.send({
            
          })
      })
} */