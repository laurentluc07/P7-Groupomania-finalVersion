//Importation des packages de node
const express = require("express");
const commentController = require("../controllers/commentController");
const ctrlToken = require("../middlewares/ctrlToken");

//Création d'un routeur
const router = express.Router();

//Création des routes
router.post("/createComment/:idpost", ctrlToken, commentController.createComment);
router.delete("/deleteComment/:idcomment", ctrlToken, commentController.deleteComment);

//Exportation du routeur de l'utilisateur
module.exports = router;
