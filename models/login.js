module.exports = function(sequelize, DataTypes){
    var Login = sequelize.define("Login", {
        auth_id: {
            allowNull: false,
            type: DataTypes.STRING
        },
        band_id: {
            allowNull: true,
            type: DataTypes.INTEGER
        },
        fan_id: {
            allowNull: true,
            type: DataTypes.INTEGER
        },
          
        
    });
    return Login;
}
