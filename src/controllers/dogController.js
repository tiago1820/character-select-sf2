const ApiService = require("../services/apiService.js");

class DogController {
    constructor() {
        this.api = new ApiService();

    }

    getBreedById = async (req, res) => {
        try {
            const { idBreed } = req.params;
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

    getBreedByName = async (req, res) => {
        try { 
	    const { breedName } = req.query;
	    let message = "";

	    if (!breedName) {
                message = "Falta el nombre de la raza.";
	        return res.status(400).send(message);
	    }
	
	    let breedInfo = await this.api.getBreedByName(breedName);

	    if(!breedInfo) {
                message = "Raza no encontrada.";
	        return res.status(400).send(message);
	    }
	    
	    return res.status(200).json(breedInfo);
        } catch (error) {
	    console.log(error);
	    message = "Raza no encontrada.";
	    return res.status(404).send(message);
	}
    }
}



module.exports = DogController;
