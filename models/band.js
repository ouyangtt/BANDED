module.exports = function(sequelize, DataTypes){
    var Band = sequelize.define("Band", {
        auth_id: {
            allowNull: false,
            type: DataTypes.STRING
        },
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
            allowNull: false,
            type: DataTypes.INTEGER,
            validate:{
                not: ['[a-z]', 'i']
            }    

        } 
    });


    Band.associate = function(models) {
        
        Band.belongsToMany(models.Fan,{
            through: "BandFan"
        });
        Band.belongsToMany(models.Event,{
            through: "BandEvent"
        });
        Band.belongsToMany(models.Genre,{
            through:"BandGenre"
        });
    }    
    return Band;

}
 
