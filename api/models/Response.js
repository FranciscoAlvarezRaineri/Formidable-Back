const mongoose = require("mongoose");

var responseSchema = new mongoose.Schema(
  {
    // ID del formulario al que corresponde
    form_id: {
      type: String,
      required: true,
    },
    // ID del usuario al que corresponde
    user_id: {
      type: String,
      required: true,
    },
    // nombre de quien responde el formulario
    name: {
      type: String,
      required: true,
    },
    // La respuesta en si del formulario
    response: {
      type: Object,
    },
  },
  { timestamps: true, versionKey: false }
);

const Response = mongoose.model("responses", responseSchema);

module.exports = Response;
