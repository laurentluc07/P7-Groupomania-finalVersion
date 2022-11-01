const userController = require("../controllers/userController");
const ctrlToken = require("../middlewares/ctrlToken");
const multer = require("../middlewares/multer-user");
const password = require("../middlewares/validPassword");
const email = require("../middlewares/validEmail");
const changePassword = require("../middlewares/changePassword");

//*Importation du router express
//===============================
const router = require("express").Router();

//*GESTION DES ROUTES UTILISATEUR
//===============================

//Route pour la création d'un utilisateur
router.post("/add",  email, password, userController.addUser);

//Route de connexion utilisateur
router.post("/login", email, password, userController.login);

//Route de gestion des profiles utilisateurs
router.get("/admin/profile", ctrlToken, userController.getAllUsers);
router.get("/profile", ctrlToken, userController.getUser);
router.put("/editProfile", ctrlToken, multer, userController.editProfile);
router.put("/updatePwd", ctrlToken, changePassword, userController.updatePwd);
router.delete("/deleteProfile/:id", ctrlToken, userController.deleteProfile);


//Exportation du routeur
module.exports = router;
