const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id:{

    type: DataTypes.UUID,  
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
    
  },
  name: { //nombre
      type: DataTypes.STRING,
      allowNull: false,
    },

  summary: { //resumen
      type: DataTypes.TEXT,
      allowNull: false,
    },
    healthscore: {//puntuacion
    type: DataTypes.INTEGER,
    
  },

  image: { //imagen
    type: DataTypes.STRING,
    allowNull : false
  },

  steps: { //pasos                         .ARRAY    tipo de valores de array
    type:DataTypes.ARRAY(DataTypes.STRING), //DataTypes.ARRAY is not available on Mysql, it's only available on postgres.
    
  },

  dishtypes: { //platos
   type: DataTypes.STRING
  }

  },
{
      timestamps:false
  });
};
