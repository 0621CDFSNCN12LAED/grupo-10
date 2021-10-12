const path = require("path");
const multer = require("multer");


const storage = multer.diskStorage({
    destination: path.join(__dirname, "../../public/"),
    filename: (req, file, cb) => {
        cb(null,  "/img/" + Date.now() + path.extname(file.originalname));
    },
});

const uploader = multer({
    storage,
});

module.exports = uploader