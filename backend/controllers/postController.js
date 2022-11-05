const db = require("../models");
const fs = require("fs");


//============================================================================
// * MODELE DE BASE
//============================================================================

const Post = db.posts;
const User = db.users;
const Comment = db.comments;

//============================================================================
// * CREATION D'UN POST (POST)                            /api/post/createPost
//============================================================================

const addPost = (req, res) => {
  const userToken = req.userToken;
  const description = req.body.description;
  const author = User.firstName
  const image = `${req.protocol}://${req.get("host")}/public/images/${req.file.filename}`;
  if (description === "") {
    res.status(400).json({ message: "La description est obligatoire" });
  }
  if (description.length <= 10) {
    res.status(400).json({ message: "La description de l'article doit contenir au moins 10 caractères" });
  } else {
    Post.create({
      description: description,
      image: image,
      name: author,
      status: 0,
      UserId: userToken,
    })
      .then((post) => {
        res.status(200).json({ message: "Article créé avec succès", post: post });
      })
      .catch((error) => {
        const message = "Echec de l'édition de votre article"
        res.status(500).json({ message, data: error });
      });
  }
};

//============================================================================
// * MODIFICATION D'UN POST (PUT)                     /api/post/modifyPost/:id
//============================================================================
const modifyPost = (req, res) => {
  const userToken = req.userToken;
  const description = req.body.description;
  const idPost = req.params.id
  Post
    .findOne({
      attributes: ["id", "description", "UserId"],
      where: { id: idPost }
    })
    .then((post) => {
      const userId = post.UserId;
      if (userToken == userId) {
        post.update({
          description: description
        })
          .then((postUpdate) => {
            const message = `Votre article a bien été mis à jour`;
            res.status(200).json({ message, data: postUpdate });
          })
          .catch((error) => {
            const message = `Echec de la mise à jour de votre article ${idPost}`;
            res.status(400).json({ message, data: error });
          })
      } else {
        res.status(404).json({ message: "Vous ne disposez pas des droits pour modifier cet article" });
      }
    })
    .catch((error) => {
      const message = "La mise à jour de cet article est indisponible pour le moment";
      res.status(500).json({ message, data: error });
    });
  // User.findByPk(userToken)
  // .then((user) => {
  //   if(user.id == userToken){
  //     Post.findOne({
  //       attributes: ["id", "description", "UserId"],
  //       where: { id: idPost }
  //     })
  //     .then((post) => {
  //       console.log(post)
  //       const userId = post.UserId;
  //       console.log(userId + "===================="+ userToken)
  //       console.log("=============USERADMIN============"+ user.isAdmin)
  //       if (userId == userToken || user.isAdmin == "Administrateur") {
  //         post.update({
  //           description: description
  //         })
  //           .then((postUpdate) => {
  //             const message = `Votre article a bien été mis à jour`;
  //             res.status(200).json({ message, data: postUpdate });
  //           })
  //           .catch((error) => {
  //             const message = `Echec de la mise à jour de votre article ${idPost}`;
  //             res.status(400).json({ message, data: error });
  //           })
  //       } else {
  //         res.status(404).json({ message: "Vous ne disposez pas des droits pour modifier cet article" });
  //       }
  //     })
  //     .catch((error) => {
  //       const message = "La mise à jour de cet article est indisponible pour le moment";
  //       res.status(500).json({ message, data: error });
  //     });
  //   }
  // })
  // .catch((error) => {})
  //     const message = "Vous ne disposez pas des droits pour cette article"
};
//============================================================================
// * RECUPERATION DE L'ENSEMBLE DES POSTS (GET)          /api/post/getAllposts
//============================================================================

const getAllPosts = async (req, res) => {
  Post.findAll({
    include: [
      {
        model: User,
        attributes: ["firstName", "lastName", "isAdmin", "profilePicture"],
      },
      {
        model: Comment,
        as: "comments",
        include: {
          model: User,
          attributes: ["firstName"]
        }
      }
    ],
    order: [["createdAt", "DESC"]],
  })
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((error) => {
      const message = "Impossible de récupérer la liste des articles pour le moment"
      res.status(400).json({ message, data: error });
    });
};


//============================================================================
// * SUPPRESSION D'UN ARTICLE (DELETE)                /api/post/deletePost/:id
//============================================================================

const deletePost = async (req, res) => {
  const userToken = req.userToken;
  const idPost = req.params.id;
  User.findByPk(userToken)
  .then((user) => {
    if(user.id == userToken){
      console.log("======USERTOKEN============>"+ userToken)
      console.log("======USER============>"+ user.id);
      console.log("======ISADMIN============>"+ user.isAdmin )
    Post.findByPk(idPost)
    .then((post) => {
      console.log(post.UserId + "===================="+ userToken)
      console.log("=============USERADMIN============"+ user.isAdmin)
      if (post.UserId == userToken || user.isAdmin == "Administrateur") {
        const postImage = post.image.split("/").pop();
        fs.unlink("public/images/" + postImage, (err) => {
          if (err) res.status(500).send({ message: err });
          post.destroy()
            .then(() => {
              res.status(200).json({ message: "Article supprimé avec succés", post: post });
            })
            .catch((error) => {
              const message = "Echec de la suppression de cette article"
              res.status(400).json({ message, data: error });
            });
        });
      }
    })
    .catch((error) => {
      const message = "Suppression de cet article non disponible pour le moment"
      res.status(500).json({ message, data: error });
    });
    }
  })
  .catch((error) => {})
      const message = "Vous ne disposez pas des droits pour cette article"

};

//============================================================================
//* VERROUILLAGE D'UN ARTICLE                          /api/post/blockPost/:id
//============================================================================

const blockPost = async (req, res) => {
  const userToken = req.userToken;
  User.findByPk(userToken)
    .then((user) => {
      if (user.isAdmin === "Administrateur" || user.isAdmin === "Modérateur") {
        const idPost = req.params.id;
        if (!idPost) {
          return res.status(200).json({ message: "Cet article n'existe pas" });
        }
        Post.update({ status: 1 }, { where: { id: idPost } })
          .then((post) => {
            res.status(200).json({ message: "Cet article a été bloquer avec succès" });
          })
          .catch((error) => {
            res.status(404).json({ message: error.message });
          });
      } else {
        res
          .status(401)
          .json({ message: "Vous ne disposez pas des droits nécéssaires" });
      }
    })
    .catch((error) => {
      res.status(error.status).json({ message: error.message });
    });
};

//============================================================================
//* DEVERROUILLAGE D'UN ARTICLE                      /api/post/unBlockPost/:id
//============================================================================

const unBlockPost = async (req, res) => {
  const userToken = req.userToken;
  User.findByPk(userToken)
    .then((user) => {
      if (user.isAdmin === "Administrateur") {
        const idPost = req.params.id;
        if (!idPost) {
          return res.status(200).json({ message: "Cet article n'existe pas" });
        }
        Post.update({ status: 0 }, { where: { id: idPost } })
          .then((post) => {
            res.status(200).json({ message: "Cet article a été débloquer avec succès" });
          })
          .catch((error) => {
            res.status(404).json({ message: error.message });
          });
      } else {
        res
          .status(401)
          .json({ message: "Vous ne disposez pas des droits nécéssaires" });
      }
    })
    .catch((error) => {
      res.status(error.status).json({ message: error.message });
    });
};

module.exports = {
  addPost,
  getAllPosts,
  modifyPost,
  deletePost,
  blockPost,
  unBlockPost,
};
