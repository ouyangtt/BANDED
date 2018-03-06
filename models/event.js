module.exports = function(sequelize, DataTypes){
    var Event = sequelize.define("Event", {
        name: {
            allowNull: false,
            type: DataTypes.STRING,
            validate:{
                notEmpty:true
            }
        },
        time: {
            allowNull: false,
            type: DataTypes.DATETIME,
            validate: {
                notEmpty:true
            }
        },
        channel_id: {
            allowNull: false,
            type: DataTypes.INTEGER
        }
    }); 
    Event.associate = function(models){
        Event.belongsTo(models.Band, {
            foreignKey: {
              allowNull: false
            }
          });
        Event.belongsTo(models.Fan, {
            foreignKey: {
              allowNull: false
            }
        });  
    }
    return Event;
}