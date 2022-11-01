//Importation des packages de node
const express = require('express');
const likeController = require("../controllers/likeController");
const ctrlToken = require("../middlewares/ctrlToken");

//Création d'un routeur
const router = express.Router();


//Création des routes
router.get('/getLike/:postId', ctrlToken, likeController.getLikeBypostUser);
router.get('/gestionLike/:postId', ctrlToken, likeController.gestionLike);
router.get('/getAllLikes', ctrlToken, likeController.getAllLikes);


//Exportation du routeur de l'utilisateur
module.exports = router;