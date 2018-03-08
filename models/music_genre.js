module.exports = function(sequelize, DataTypes){
    var MusicGenre = sequelize.define("MusicGenre", {
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        g_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            validate:{
                notEmpty:true,
                not: ['[a-z]', 'i']
            }
        }    
        
    });
    MusicGenre.associate = function(models) {
        
        MusicGenre.hasMany(models.Band,{
            
        });
        MusicGenre.hasMany(models.Fan,{
           
        });
        MusicGenre.hasMany(models.Genre,{
            
    });
    return MusicGenre;
}
