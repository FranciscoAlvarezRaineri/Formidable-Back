const mongoose = require("mongoose");

var responseSchema = new mongoose.Schema(
  {
    // ID del formulario al que corresponde
    form_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "forms",
      required: true,
    },
    // ID del usuario al que correspondes
    creator_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      //required: true,
    },
    // Las respuestas al formulario
    formData: {
      type: Object,
    },
  },
  { timestamps: true, versionKey: false }
);

const Response = mongoose.model("responses", responseSchema);

module.exports = Response;
