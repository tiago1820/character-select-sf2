const { signInWithEmailAndPassword } = require("firebase/auth");
const { auth } = require("../../firebase.js");

class AuthController {
    
    login = async (req, res) =>  {
	const { password, email: reqEmail } = req.query;
        
	try {
            const credentials = await signInWithEmailAndPassword(auth, reqEmail, password);
		if(!credentials) {
	            return res.status(400).send("Email o contraseña invalidos.");
	        }

	    const { user } = credentials;
	    const { email, uid } = user;
	   
	    return res.status(200).json({ email, uid })

	} catch (error) {
            return res.status(500).send("Error interno del servidor.");
	}
	
    }
}

module.exports = AuthController;
