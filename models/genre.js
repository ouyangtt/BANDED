module.exports = function(sequelize, DataTypes){
    var Genre = sequelize.define("Genre", {
        name: {
            allowNull: false,
            type: DataTypes.STRING
        }    
        
    });
    Genre.belongsTo(models.MusicGenre, {
        foreignKey: {
          allowNull: false
        }
      });
    return Genre;
}