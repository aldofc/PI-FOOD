const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('TypeDiet', {

  id:{
    type: DataTypes.UUID,  //esto es para no tener conflictos con los id's de la api que no se repitan
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
    
  },
  name: { //nombre
      type: DataTypes.STRING,
      allowNull: false,
    },
},

{
    timestamps:false
});
};