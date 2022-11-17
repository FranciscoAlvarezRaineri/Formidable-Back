var Form = require("../models/Form")



// //create new user
exports.create = (req, res) => {
    //validate
    if (!req.body) {
        return res.status(400).send({ message: "Content can not be empty" })


    }
    //new form
    const form = new Form({
        schema: req.body.schema,
        uischema: req.body.uischema,
        date: req.body.date,
        answers: req.body.answers
    })

    //save form in dataBase
    form
        .save(form)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message || "Some error occurred while creating a create operation" }))
}


//get all forms
exports.find = (req, res) => {

}

// //update a user by userId
// exports.find = (req, res) => {

// }

// //delete a user by userId
// exports.delete = (req, res) => {

// }
