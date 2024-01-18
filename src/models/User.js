const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("User", {
         id: {
             type: DataTypes.UUID,
             defaultValue: DataTypes.UUIDV4,
             allowNull: false,
             primaryKey: true
	 },
	 externalUid: {
	    type: DataTypes.STRING,
 	    allowNull: false,
	    unique: true
	 },
	 email: {
	     type: DataTypes.STRING,
	     allowNull: false,
	     validate: {
			isEmail: true
		 }
	 },
    }, { timestamps: false });
};
