-- creating database -- 
DROP DATABASE IF EXISTS  burger_db;
CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burger (
    id INTEGER(10) AUTO_INCREMENT NOT NULL,
    name VARCHAR (45) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY(id)
);