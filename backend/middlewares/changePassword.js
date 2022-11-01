//==============================================================
// *Gestion de la validité des changements de mots de passe
//==============================================================
const pwdSchema = require("../models/ModValidPassword"); // Importation du format de mots de passe valide 

module.exports = (req, res, next) => {
  const newPassword = req.body.newPassword
  if (newPassword == "") {
    const message = "Votre mot de passe est obligatoire"
    res.status(400).json({ message })
  }
  if (pwdSchema.validate(newPassword)) {
    next();
  } else {
    res.status(400).json({
      message:
        "Votre mot de passe doit faire entre 8 et 20 caractères et contenir au moins une minuscule, une majuscule et deux chiffre",
    });
  }
};