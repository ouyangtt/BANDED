module.exports = function(sequelize, DataTypes){
    var Fan = sequelize.define("Fan", {
        name: {
            allowNull: false,
            type: DataTypes.STRING,
            validate:{
                notEmpty:true
            }
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING,
            validate:{
                notEmpty:true
            }
        },
        pic_url:{
            allowNull: true,
            type: DataTypes.STRING,
           
        },
        locale: {
            allowNull: false,
            type: DataTypes.INTEGER,
            validate:{
                notEmpty:true,
                not: ['[a-z]', 'i']

            }
        } 
    });

    Fan.associate = function(models) {
        
        Fan.belongsTo(models.Band, {
          foreignKey: {
            allowNull: false
          }
        });
        Fan.belongsTo(models.MusicGenre,{
            foreignKey:{
                allowNull: false
            }
        });
      };
    
    
    return Fan;
}
