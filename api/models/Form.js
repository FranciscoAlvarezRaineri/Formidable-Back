const mongoose = require("mongoose")

var formSchema = new mongoose.Schema({

    schema: {
        type: Object,
        required: true
    },
    uischema: {
        type: Object,
        required: true,
        unique: true
    },
    answers: {
        type : Array
    }
},
{  timestamps: true,
    versionKey: false
})

const Form = mongoose.model("forms", formSchema)
//                            | nombre del documento


module.exports = Form