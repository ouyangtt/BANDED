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
        
        Band.belongsToMany(models.Fan,{
             foreighKey: "id"
        });
        Band.belongsToMany(models.Event,{
            foreighKey: "id"
       });
        Band.belongsToMany(models.MusicGenre,{
            foreighKey: "id"
       });
    return Band;
}
}
 
