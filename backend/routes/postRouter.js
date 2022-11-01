const articleController = require("../controllers/postController");
const multer = require("../middlewares/multer-config")
const ctrlToken = require("../middlewares/ctrlToken")
const path = require("path")

//*Importation du router express
//===============================
const router = require("express").Router();

//*GESTION DES ROUTES ARTICLES
//===============================

router.post("/createPost", ctrlToken, multer, articleController.addPost);
router.get("/getAllPosts", ctrlToken, articleController.getAllPosts);
router.put("/modifyPost/:id", ctrlToken, articleController.modifyPost);
router.delete("/deletePost/:id", ctrlToken, articleController.deletePost);
router.put("/blockPost/:id", ctrlToken, articleController.blockPost);
router.put("/unBlockPost/:id", ctrlToken, articleController.unBlockPost);


//*Exportation du routeur
//===============================
module.exports = router;
