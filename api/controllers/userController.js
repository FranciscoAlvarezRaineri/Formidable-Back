var User = require("../models/User")



// //create new user
exports.create = (req, res) => {
    //validate
    if (!req.body) {
        return res.status(400).send({ message: "Content can not be empty" })


    }
    //new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    //save user in dataBase
    user
        .save(user)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message || "Some error occurred while creating a create operation" }))
}


//get all users
exports.find = (req, res) => {

}

// //update a user by userId
// exports.find = (req, res) => {

// }

// //delete a user by userId
// exports.delete = (req, res) => {

// }
