DROP DATABASE IF EXISTS taskbar_db;
CREATE DATABASE taskbar_db;
USE taskbar_db;

CREATE TABLE taskbar
(
    id int NOT NULL,
    AUTO_INCREMENT INTEGER,
    task varchar
    (255) NOT NULL,
    done BOOLEAN DEFAULT false,
    PRIMARY KEY
    (id)
); 
