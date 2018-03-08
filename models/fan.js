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
        
        // Fan.belongsToMany(models.Band, {
        //     through: { model: models.Bands }   
        // });
        // Fan.belongsToMany(models.Genre, {
        //     through: { model: models.Genre}   
        // });
        // Fan.belongsToMany(models.Event, {
        //     through: { model: models.Event}   
        // });
        
    
    }
    return Fan;
    
}
