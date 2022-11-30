const Form = require("../models/Form");
const Response = require("../models/Response");

// //create new user
exports.create = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Content can not be empty" });
  }
  const form = new Form({
    ...req.body,
    responses: null,
  });
  form
    .save(form)
    .then((data) => res.send(data))
    .catch((err) =>
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating a create operation",
      })
    );
};

//get all forms
exports.getForms = (req, res) => {
  Form.find()
    .populate("responses")
    .sort({ createdAt: -1 })
    .then((forms) => res.status(200).send(forms))
    .catch((err) => res.status(400).send(err));
};

exports.getFormsByUser = (req, res) => {
  const user_id = req.params.user_id;
  Form.find({ user_id })
    .sort({ createdAt: -1 })
    .then((forms) => res.status(200).send(forms))
    .catch((err) => res.status(400).send(err));
};

exports.getOneForm = (req, res) => {
  console.log("id", req.params.id);
  const id = req.params.id;
  Form.findById(id).then((form) => res.status(200).send(form));
};

exports.updateForm = (req, res) => {
  const _id = req.params.id;
  console.log(_id, req.body);
  Form.updateOne({ _id }, req.body)
    .then((form) => {
      res.status(200).send(form);
    })
    .catch((err) => res.status(404).send(err));
};

exports.deleteForm = (req, res) => {
  const _id = req.params.id;
  console.log(_id);
  Form.deleteOne({ _id }).then((form) => res.status(200).send(form));
};

/*exports.deleteForm = (req, res) => {
  const { id } = req.params.id;
  Form.remove().then((form) => res.status(200).send(form));
};*/
