module.exports = function(sequelize, DataTypes){
    var Genre = sequelize.define("Genre", {
        name: {
            allowNull: false,
            type: DataTypes.STRING
        }    
        
    });
    // Genre.associate = function(models){
    //     Genre.belongsToMany(models.Fan, {
    //         through: { models: models.Fan}    
    //     });
    //     Genre.belongsToMany(models.Band, {
    //         through: { models: models.Band}   
    //      });
    // }
   
     
    return Genre;
}