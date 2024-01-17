// const { signInWithEmailAndPassword, createUserWithEmailAndPassword } = require("firebase/auth");
// const { auth } = require("../../firebase.js");

// class AuthController {
    
//     signIn = async (req, res) =>  {
// 	const { password, email: reqEmail } = req.query;
        
// 	try {
//             const credentials = await signInWithEmailAndPassword(auth, reqEmail, password);
// 	    if(!credentials) {
// 	        return res.status(400).send("Email o contraseña invalidos.");
// 	    }

// 	    const { user } = credentials;
// 	    const { email, uid } = user;

// 	    // Enviar email y uid a base de datos?
	   
// 	    return res.status(200).json({ email, uid })

// 	} catch (error) {
//             return res.status(500).send("Error interno del servidor.");
// 	}
//     }

//     signUp = async (req, res) => {
//         const { email: reqEmail, password } = req.body;
	
// 	try {
// 	    const credentials = await createUserWithEmailAndPassword(auth, reqEmail, password);
// 	    if(!credentials) {
// 		// El correo ya existe
// 	        return res.status(400).send("Email o contraseña invalidos.");
// 	    }

// 	    const { user } = credentials;
// 	    const { email, uid } = user;
     	    
// 	    return res.status(200).json({ email, uid });

// 	} catch(error) {
// 	    console.log(error);
//             return res.status(500).send("Error interno del servidor.");
// 	}




//     }

    




// }











// module.exports = AuthController;
