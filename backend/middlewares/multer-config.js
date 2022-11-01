//==============================================================
// *Gestion du stockage des fichiers des posts
//==============================================================
const multer = require("multer");
const path = require("path")

const storage = multer.diskStorage({
  destination: 'public/images/',
  filename: (req, file, cb) => {
      return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
      if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
          cb(null, true);
      } else {
          cb(null, false);
          return cb(new Error('Seul les formats .png, .jpg and .jpeg sont autorisés !'));
      }
  }
})

module.exports = multer({ storage : storage }).single("image");
