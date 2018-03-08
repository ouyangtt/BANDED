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
            type: DataTypes.STRING,
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
        Event.belongsToMany(models.Band,{
            through: { models:
                "UserEvent"
            }   
        });
        Event.belongsToMany(models.Fan,{
            through: { 
                "FanEvent"
            }   
        });
    }
    return Event;
}