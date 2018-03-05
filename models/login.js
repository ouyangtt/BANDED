module.exports = function(sequelize, DataTypes){
    var Login = sequelize.define("Login", {
        auth_id: {
            allowNull: false,
            type: DataTypes.STRING
        },
        is_band: {
            type: Boolean,
            DEFAULT: false
        },
        u_id: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
          
        
    });
    return Login;
}
