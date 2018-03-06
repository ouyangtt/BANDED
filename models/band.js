module.exports = function(sequelize, DataTypes){
    var Band = sequelize.define("Band", {
        name: {
            allowNull: false,
            type: DataTypes.STRING
            
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING,
            
        },
        pic_url: {
            allowNull: true,
            type: DataTypes.STRING
        },
        bio: {
            allowNull: true,
            type: DataTypes.STRING
        },
        twitter: {
            allowNull: true,
            type: DataTypes.STRING
        }, 
        facebook:{
            allowNull: true,
            type: DataTypes.STRING
        }, 
        instagram: {
            allowNull: true,
            type: DataTypes.STRING
        }, 
        bandcamp: {
            allowNull: true,
            type: DataTypes.STRING
        }, 
        locale: {
            allowNull: true,
            type: DataTypes.INTEGER,
            validate:{
                not: ['[a-z]', 'i']
            }    

        } 
    });


    Band.associate = function(models) {
        
        Band.hasMany(models.Fan,{
             
        });
        Band.hasMany(models.Event,{
            
        });
        Band.hasMany(models.MusicGenre,{
            
    });
    return Band;
}

 
