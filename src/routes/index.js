const { Router } = require("express");
const router = Router();

const DogController = require("../controllers/dogController");
const AuthController = require("../controllers/authController");
const dog = new DogController();
const auth = new AuthController();

// Authentication
router.get("/auth", (req, res) => auth.login(req, res));

router.get("/dogs/breedName", (req, res) => dog.getBreedByName(req, res));
router.get("/dogs", (req, res) => dog.getAllBreeds(req, res));
router.get("/dogs/:idBreed", (req, res) => dog.getBreedById(req, res));
module.exports = router;
