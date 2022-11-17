var Form = require("../models/Form");

// //create new user
exports.create = (req, res) => {

  if (!req.body) {
    return res.status(400).send({ message: "Content can not be empty" });
  }
  const form = new Form({
    schema: req.body.schema,
    uischema: req.body.uischema,
    answers: req.body.answers,
  });
  form
    .save(form)
    .then((data) => res.send(data))
    .catch((err) =>
      res
        .status(500)
        .send({
          message:
            err.message ||
            "Some error occurred while creating a create operation",
        })
    );
};

//get all forms
exports.getForms = (req, res) => {
  Form.find()
    .then((forms) => res.status(200).send(forms))
    .catch((err) => res.status(400).send(err));
};


//ruta para mostrar un solo formulario, y para login

//Modificar Form

/* exports.updateUser = (req, res) => {
  const { id } = req.params
  const body = req.body
  Form.updateOne(
      { id, },
      body,
      (err, docs) => {
          res.send({
              
          })
      })
} */


//borrar form

/* exports.deleteUser = (req, res) => {
  const { id } = req.params
  Form.deleteOne(
      { id, },
      (err, docs) => {
          res.send({
              
          })
      })
} */