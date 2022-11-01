//==============================================================
// *Gestion de la validité des emails
//==============================================================
const checkEmail = require("email-validator"); // controle la validité des emails (regex)

module.exports = (req, res, next) => {
  const email = req.body.email
  if (email =="") {
    const message = "L'adresse email est obligatoire"
    res.status(400).json({ message })
  }
  if (checkEmail.validate(req.body.email)) {
    next();
  } else {
    return res
      .status(400)
      .json({ message: "Veuillez saisir une adresse électronique valide." });
  }
};