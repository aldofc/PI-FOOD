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
    allowNull: false,
  },

  image: { //imagen
    type: DataTypes.STRING,
    defaultValue :  'https://thumbs.dreamstime.com/b/el-dise%C3%B1o-de-la-pizarra-con-el-utensilio-de-la-tabla-de-cortar-y-de-la-cocina-y-la-receta-enumeran-56598022.jpg',
  },

  steps: { //pasos
    type:DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false 
  },

  dishtypes: { //platos
   type: DataTypes.STRING
  }

  },
{
      timestamps:false
  });
};
