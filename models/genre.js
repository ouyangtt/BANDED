module.exports = function(sequelize, DataTypes){
    var Genre = sequelize.define("Genre", {
        name: {
            allowNull: false,
            type: DataTypes.STRING
        }    
        
    });
    Genre.belongsToMany(models.Fan, {
        foreignKey: "id"
    });
    Genre.belongsToMany(models.Band, {
        foreignKey: "id"
    });
     
    return Genre;
}