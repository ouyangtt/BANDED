module.exports = function(sequelize, DataTypes){
    var Genre = sequelize.define("Genre", {
        name: {
            allowNull: false,
            type: DataTypes.STRING
        }    
        
    });
    Genre.belongsToMany(models.Fan, {
        foreighKey: "id"
    });
    Genre.belongsToMany(models.Band, {
        foreighKey: "id"
    });
     
    return Genre;
}