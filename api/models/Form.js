const mongoose = require("mongoose");

var formSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
    },
    schema: {
      type: Object,
      //required: true,
    },
    uischema: {
      type: Object,
      //required: true,
    },
  },

  { timestamps: true, versionKey: false }
);

const Form = mongoose.model("forms", formSchema);
//                            | nombre del documento

module.exports = Form;
