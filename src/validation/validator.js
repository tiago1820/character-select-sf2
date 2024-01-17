class Validator {

    breedIdValidator = (breedId) => {
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        const idRegex = /^\d+$/;

        if(uuidRegex.test(breedId)){
            return "UUID";
        } else if (idRegex.test(breedId)) {
            return "ID";
        } else {
            return "Formato no valido."
        }
    }

}

module.exports = Validator;