module.exports = function(sequelize, DataTypes){
    var Band = sequelize.define("Band", {
<<<<<<< HEAD
        name: {
            allowNull: false,
            type: DataTypes.STRING,
            validate:{
                notEmpty:true
            }
=======
        auth_id:{
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
            
>>>>>>> parent of 2505213... delete
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
<<<<<<< HEAD
            allowNull: true,
            type: DataTypes.INTEGER,
            validate:{
                notEmpty:true,
=======
            allowNull: false,
            type: DataTypes.INTEGER,
            validate:{
>>>>>>> parent of 2505213... delete
                not: ['[a-z]', 'i']
            }    

        } 
    });


    Band.associate = function(models) {
        
<<<<<<< HEAD
        Band.hasMany(models.Fan,{
             
        });
        Band.hasMany(models.Event,{
            
        });
        Band.hasMany(models.MusicGenre,{
            
    });
    return Band;
};
}

=======
        Band.belongsToMany(models.Fan,{
            through: "UserFan"
        });
        Band.belongsToMany(models.Event,{
            through: { models:
                "UserEvent"
            }   
        });
        Band.belongsToMany(models.Genre,{
            through: { models:
                "UserGenre"
            }   
        });
    return Band;
};
}
}
>>>>>>> parent of 2505213... delete
 
