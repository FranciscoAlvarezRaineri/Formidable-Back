var User = require("../models/User");
var bcrypt = require("bcrypt");

// User.findOne({password: password, email: email }, function (err, docs) {
//   return user;
// });

// // exports.loginUsers = (req, res) => {
// //   const { password, email } = req.body;

// // User.findOne({password: password, email: email }, function (err, docs) {
// //     if (!docs) return res.sendStatus(401);
// //     else {
// //           const token = generateToken(docs);
// //           res.cookie("token", token);
// //           res.send(token);
// // }})};

exports.login = async (email, password) => {
  const user = await User.findOne({ email });
  console.log(user);
  if (!user) throw Error("Usuario no encontrado");
  const validate = await user.validatePassword(password);
  if (!validate) throw Error("Contraseña incorrecta");
  return {
    id: user.id,
    email: user.email,
    name: user.name,
    confirm: user.confirm,
  };
};
