DROP DATABASE IF EXISTS banded_db;
CREATE DATABASE banded_db;
USE banded_db;

CREATE TABLE bands(
    b_id INTEGER(10) NOT NULL AUTO_INCREMENT,
    band_name VARCHAR(50) NOT NULL,
    band_pic_url VARCHAR(200),
    bio VARCHAR(300), 
    b_locale INTEGER(10) NOT NULL,
    PRIMARY KEY(b_id)
);

CREATE TABLE login(
    id INTEGER(10) NOT NULL AUTO_INCREMENT,
    auth_id VARCHAR(30) NOT NULL,
    is_band BOOLEAN DEFAULT false,
    u_id INTEGER(10) NOT NULL,
    PRIMARY KEY(id)
 );

CREATE TABLE soc_media(
    sm_id INTEGER(10) NOT NULL AUTO_INCREMENT,
    sm_name VARCHAR(20) NOT NULL,
    sm_url VARCHAR(200),
    b_id INTEGER(10) NOT NULL,
    PRIMARY KEY(sm_id),
    FOREIGN KEY(b_id) REFERENCES bands(b_id)
);

CREATE TABLE fans(
    f_id INTEGER(10) NOT NULL AUTO_INCREMENT,
    fan_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    fan_pic_url VARCHAR(200),
    f_locale INTEGER(10) NOT NULL,
    b_id INTEGER(10) NOT NULL,
    PRIMARY KEY(f_id),
    FOREIGN KEY(b_id) REFERENCES bands(b_id)
);
 
CREATE TABLE genres(
    g_id INTEGER(5) NOT NULL AUTO_INCREMENT,
    genre_name VARCHAR(50) NOT NULL,
    PRIMARY KEY(g_id)
    
);

CREATE TABLE music_genres(
    mg_id INTEGER(5) NOT NULL AUTO_INCREMENT,
    g_id INTEGER(5) NOT NULL,
    b_id INTEGER(10),
    f_id INTEGER(10),
    PRIMARY KEY(mg_id),
    FOREIGN KEY(g_id) REFERENCES genres(g_id),
    FOREIGN KEY(b_id) REFERENCES bands(b_id),
    FOREIGN KEY(f_id) REFERENCES fans(f_id)
);    

CREATE TABLE events(
    e_id INTEGER(10) NOT NULL AUTO_INCREMENT,
    e_name VARCHAR(50) NOT NULL,
    e_time DATETIME,
    band_id INTEGER(10) NOT NULL,
    PRIMARY KEY(e_id), 
    FOREIGN KEY(band_id) REFERENCES bands(b_id)
); 
