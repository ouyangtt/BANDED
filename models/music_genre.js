module.exports = function(sequelize, DataTypes){
    var MusicGenre = sequelize.define("MusicGenre", {
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        g_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
            validate:{
                notEmpty:true,
                not: ['[a-z]', 'i']
            }
        }    
        
    });
    MusicGenre.associate = function(models) {
        
        MusicGenre.hasMany(models.Band,{
            foreignKey: {
                allowNull: false
            }
        });
        MusicGenre.hasMany(models.Fan,{
            foreignKey: {
                allowNull: false
            }
        });
        MusicGenre.hasMany(models.Genre,{
            foreignKey: {
                allowNull: false
            }
    });
    return MusicGenre;
}


CREATE TABLE music_genre(
    mg_id INTEGER(5) NOT NULL AUTO_INCREMENT,
    g_id INTEGER(5) NOT NULL,
    b_id INTEGER(10),
    f_id INTEGER(10),
    PRIMARY KEY(mg_id),
    FOREIGN KEY(g_id) REFERENCES genres(g_id),
    FOREIGN KEY(b_id) REFERENCES bands(b_id),
    FOREIGN KEY(f_id) REFERENCES fans(f_id)
);   