const router = require("express").Router();

router.get("/", (req, res) => console.log("Hola Mundo"));

module.exports = router;