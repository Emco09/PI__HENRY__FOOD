const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: UUIDV4
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    Healthscore: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    steps: {
      type: DataTypes.TEXT,
      allowNull: true,// Valor por defecto: un array vacío
    },
  });
};
