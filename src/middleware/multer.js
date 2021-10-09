const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: path.join(__dirname, "../../public/img"),
    filename: (req, file, cb) => {
        cb(null,  "/users/" + Date.now() + path.extname(file.originalname));
    },
});

const uploaderUsers = multer({
    storage,
});

module.exports = uploaderUsers



const storage2 = multer.diskStorage({
    destination: path.join(__dirname, "../../public"),
    filename: (req, file, cb) => {
        cb(null,  "/img/" + Date.now() + path.extname(file.originalname));
    },
});

const uploaderProduct = multer({
    storage2,
});

module.exports = uploaderProduct