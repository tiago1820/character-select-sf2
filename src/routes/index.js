const { Router } = require("express");
const router = Router();

const DogController = require("../controllers/dogController");
const dog = new DogController();

router.get("/dogs", (req, res) => dog.getAllBreeds(req, res));
router.get("/dogs/:idBreed", (req, res) => dog.getBreedById(req, res));

module.exports = router;