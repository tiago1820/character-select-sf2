const { signInWithEmailAndPassword, createUserWithEmailAndPassword } = require("firebase/auth");
const { auth } = require("../../firebase.js");
const { User } = require("../db.js");

class AuthController {

    signIn = async (req, res) => {
        // const { password, email: reqEmail } = req.query;
        const { email: reqEmail } = req.query;


        try {
            const dataValues = await User.findOne({
                where: {
                    email: reqEmail,
                },
            });

            if (!dataValues) {
                return res.status(404).send("Usuario no encontrado.");
            }

            const userInfo = {
                email: dataValues.email,
                id: dataValues.id,
            };

            return res.status(200).json(userInfo);

        } catch (error) {
            console.log(error);
            return res.status(500).send("Error interno del servidor.");
        }

        // try {
        //     const credentials = await signInWithEmailAndPassword(auth, reqEmail, password);
        //     console.log("HOLA: ", credentials);

        //     // No encontrado en la API
        //     if (!credentials || !credentials.user) {
        //         console.log("HOLA: ", credentials);
        //         return res.status(404).send("Usuario no encontrado.");
        //     }


        //     // Fue encontrado en la API
        //     const { user } = credentials;
        //     const { email, uid } = user;

        //     console.log("dataValues: ", email, uid);

        //     // Busqueda en la base de datos
        //     try {
        //         const dataValues = await User.findOne({
        //             where: {
        //                 email: email,
        //                 externalUid: uid
        //             },
        //         });

        //         // No fue encontrado en la DB, Fuera!
        //         if (!dataValues) {
        //             return res.status(404).send("Usuario no encontrado 2.");
        //         }

        //         // Fue encontrado en la DB, Envialo al Front!
        //         const userInfo = {
        //             email: dataValues.email,
        //             id: dataValues.id,
        //         };

        //         return res.status(200).json(userInfo);

        //     } catch (error) {
        //         console.log(error);
        //         throw error;
        //     }


        // } catch (error) {
        //     console.log("ERROR ", error);
        //     if (error.code === "auth/invalid-credential") {
        //         return res.status(500).send("Email o contraseña invalido.");
        //     }

        //     return res.status(500).send("Error interno del servidor.");
        // }

    }

    //     signUp = async (req, res) => {
    //         const { email: reqEmail, password } = req.body;

    //         try {
    //             const { user } = await createUserWithEmailAndPassword(auth, reqEmail, password);

    //             if (!user.email) {
    //                 // usar los mensajes de error definidos por firebase
    //                 return res.status(400).send("Email o contraseña invalidos.");
    //             }

    //             const { email, uid: externalUid } = user;

    //             try {
    //                 const { dataValues } = await User.create({ email, externalUid });

    //                 const userInfo = {
    //                     email: dataValues.email,
    //                     id: dataValues.id
    //                 }

    //                 return res.status(200).json(userInfo);

    //             } catch (error) {
    //                 // console.log(error);
    //                 // return res.status(500).send("Error interno del servidor.");
    //                 throw error;
    //             }

    //         } catch (error) {
    //             console.log(error);
    //             return res.status(500).send("Error interno del servidor.");
    //         }
    //     }

    //     google = async (req, res) => {
    //         const { email: reqEmail, uid } = req.body;

    //         try {

    //         } catch (error) {

    //         }



    //     }
}




module.exports = AuthController;