const mongoose = require("mongoose");

var formSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      //required: true,
    },
    schema: {
      type: Object,
      //required: true,
    },
    uischema: {
      type: Object,
    },
    responses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "responses",
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

const Form = mongoose.model("forms", formSchema);
//                            | nombre del documento

module.exports = Form;
