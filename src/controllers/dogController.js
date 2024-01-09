const ApiService = require("../services/apiService.js");

class DogController {
    constructor() {
        this.api = new ApiService();

    }

    getBreedById = async (req, res) => {
        try {
            const { idBreed } = req.params;
            console.log("ID", idBreed);
            const source = isNaN(idBreed) ? "bdd" : "api";

            if(source === "api") {
                const breedInfo = await this.api.getBreedById(idBreed);
                res.status(200).json(breedInfo);
            }
            // continue
        } catch (error) {
            res.status(404).send("¡Raza no encontrada!");
        }
    }

    getAllBreeds = async (req, res) => {
        try {
            const allBreeds = await this.api.getAllBreeds();
            return res.json(allBreeds);

        } catch (error) {
            return res.status(500).send("Error al obtener las razas.");
        }
    }
}



module.exports = DogController;