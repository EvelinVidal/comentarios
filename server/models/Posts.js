module.exports = (sequelize, DataTypes) =>{ // exportando una funcion anonima que toma dos argumentos.
const Posts = sequelize.define("Posts",{
title: {
    type: DataTypes.STRING,
    allowNull: false,
},
text: {
    type: DataTypes.STRING,
    allowNull: false,
},
username: {
    type: DataTypes.STRING,
    allowNull: false,
},
})

return Posts;
}