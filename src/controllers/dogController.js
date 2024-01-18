const ApiService = require("../services/apiService.js");
const Validator = require("../validation/validator.js");

class DogController {
    constructor() {
        this.api = new ApiService();
this.validator = new Validator();
    }

    getBreedById = async (req, res) => {
        try {
            const { breedId } = req.params;
            const source = this.validator.breedIdValidator(breedId);

            if(source !== "UUID" && source !== "ID") {
                res.status(404).send("Parametro de busqueda no valido.");
            }

            if (source === "ID") {
                const breedInfo = await this.api.getBreedById(breedId);

                if (!breedInfo) {
                    // buscar en la base de datos  
                }

                if (!breedInfo) {
                    res.status(404).send("¡Raza no encontrada!");
                }

                return res.status(200).json(breedInfo);
            
            } else if(source === null) {
                return res.status(500).send("Parametro de busqueda invalido."); 
            }

        } catch (error) {
            console.log("HOLA: ", error);
            return res.status(500).send("Error interno del servidor.");
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

	    if (!breedInfo) {
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