const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {

  id:{
    type: DataTypes.UUID,  //esto es para no tener conflictos con los id's de la api que no se repitan
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
    
  },
  name: { //nombre
      type: DataTypes.STRING,
      allowNull: false,
    },

  summary: { //resumen
      type: DataTypes.STRING,
      allowNull: false
    },
  healthscore: {//puntuacion
    type: DataTypes.INTEGER,
  },

  img: { //imagen
    type: DataTypes.STRING,
    allowNull:false//'https://img.freepik.com/foto-gratis/cuaderno-receta-tomate-farfalle-ajo-cebolla-mortero-pimienta-vista-superior-copia-espacio_141793-3458.jpg'
  },

  steps: { //pasos
    type:DataTypes.ARRAY(DataTypes.STRING)
  },

  //dishtypes: { //platos
   // type: DataTypes.STRING
  //}

  },

  {
      timestamps:false
  });
};
