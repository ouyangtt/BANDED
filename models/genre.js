module.exports = function(sequelize, DataTypes){
    var Genre = sequelize.define("Genre", {
        name: {
            allowNull: false,
            type: DataTypes.STRING
        }    
        
    });
    // Genre.associate = function(models){
    //     Genre.belongsToMany(models.Fan, {
    //         through: "FanGenre"    
    //     });
    //     Genre.belongsToMany(models.Band, {
    //         through: "BandGenre"  
    //      });
    // }
   
     
    return Genre;
}