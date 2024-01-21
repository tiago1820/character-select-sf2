const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { User } = require("./src/db.js");


// Syncing all the models at once.
conn.sync({ force: false }).then(() => {

    // const newUser = {
    //     externalUid: 'uWkqOIzOyegUJciEfTUVf6Ff1Uz2',
    //     email: 'user1@gmail.com',
    //   };
      
    //   const createdUser = async () => {
    //     User.create(newUser);
    //   } 

    //   createdUser();
      



    server.listen(3000, () => {
        console.log('%s listening at 3000'); // eslint-disable-line no-console
    });
});