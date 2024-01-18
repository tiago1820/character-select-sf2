const { signInWithEmailAndPassword, createUserWithEmailAndPassword } = require("firebase/auth");
const { auth } = require("../../firebase.js");
const { User } = require("../db.js");

class AuthController {

	signIn = async (req, res) => {
		const { password, email: reqEmail } = req.query;

		try {
			const credentials = await signInWithEmailAndPassword(auth, reqEmail, password);
			if (!credentials) {
				return res.status(400).send("Email o contraseña invalidos.");
			}

			const { user } = credentials;
			const { email, uid } = user;

			// Enviar email y uid a base de datos?

			return res.status(200).json({ email, uid })

		} catch (error) {
			return res.status(500).send("Error interno del servidor.");
		}
	}

	signUp = async (req, res) => {
		const { email: reqEmail, password } = req.body;

		try {
			const { user } = await createUserWithEmailAndPassword(auth, reqEmail, password);

			if (!user.email) {
				// usar los mensajes de error definidos por firebase
				return res.status(400).send("Email o contraseña invalidos.");
			}

			const { email, uid: externalUid } = user;

			try {
				const { dataValues } = await User.create({ email, externalUid });

				const userInfo = {
					email: dataValues.email,
					id: dataValues.id
				}

				return res.status(200).json(userInfo);

			} catch (error) {
				// console.log(error);
				// return res.status(500).send("Error interno del servidor.");
				throw error;
			}

		} catch (error) {
			console.log(error);
			return res.status(500).send("Error interno del servidor.");
		}
	}

	google = async (req, res) => {
		const { email: reqEmail, uid } = req.body;

		try {

		} catch (error) {

		}



	}

}











module.exports = AuthController;
