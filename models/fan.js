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
    return Fan;
}
