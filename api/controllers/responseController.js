var Response = require("../models/Response");

exports.getResponses = (req, res) => {
  Response.find()
    .sort({ createdAt: -1 })
    .then((responses) => res.status(200).send(responses))
    .catch((err) => res.status(400).send(err));
};

exports.create = (req, res) => {
  const { form_id, user_id, response } = req.body;
  const newResponse = new Response({
    form_id,
    user_id,
    response,
  });
  //save user in dataBase
  newResponse
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

exports.getResponsesByForm = (req, res) => {
  const form_id = req.params.form_id;
  Response.find({ form_id })
    .sort({ createdAt: -1 })
    .then((responses) => res.status(200).send(responses))
    .catch((err) => res.status(400).send(err));
};
