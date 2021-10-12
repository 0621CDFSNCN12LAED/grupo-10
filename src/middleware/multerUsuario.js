const path = require("path");
const multer = require("multer");


const storage = multer.diskStorage({
    destination: path.join(__dirname, "../../public/img/"),
    filename: (req, file, cb) => {
        cb(null,  "/users/" + Date.now() + path.extname(file.originalname));
    },
});

const uploader = multer({
    storage,
});

module.exports = uploader;