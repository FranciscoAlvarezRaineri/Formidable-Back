const mongoose = require("mongoose");

var responseSchema = new mongoose.Schema(
  {
    form_id: {
      type: String, // ID del formulario al que corresponde
      //required: true,
    },
    user_id: {
      // ID del usuario al que corresponde
      type: String,
      //required: true,
    },
    name: {
      // nombre de quien responde el formulario
      type: String,
      //required: true,
    },
    response: {
      // La respuesta en si del formulario
      type: Object,
    },
  },
  { timestamps: true, versionKey: false }
);

const Response = mongoose.model("responses", responseSchema);

module.exports = Response;
