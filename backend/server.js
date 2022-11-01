/* Importing the express module. */
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

dotenv.config();

var corOptions = {
  original: "http://localhost:8080",
};

// Importation des middlewares serveur
app.use(helmet.contentSecurityPolicy({useDefaults: false,}));
app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Importation des outils de développement

app.use(morgan("dev"));

// routers

const userRouter = require("./routes/userRouter");
const postRouter = require("./routes/postRouter");
const commentRouter = require("./routes/commentRouter");
const likeRouter = require("./routes/likeRouter");

app
  .use("/public/images", express.static(path.join(__dirname, 'public/images')))
  .use("/public/profile", express.static(path.join(__dirname, 'public/profile')))
  .use("/public/default", express.static(path.join(__dirname, 'public/default')))
  .use("/api/user", userRouter)
  .use("/api/post", postRouter)
  .use("/api/comment", commentRouter)
  .use("/api/like" , likeRouter)

//Testing API

app.get("/", (req, res, next) => {
  res.json({ message: "Hello" });
});

//Portc

const PORT = process.env.SRV_PORT || 3000;

// Server

app.listen(PORT, () => {
  console.log(
    `Notre application Node est démarée sur : http://localhost:${PORT}`
  );
});
