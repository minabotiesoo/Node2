CREATE DATABASE IF NOT EXISTS nuevo


use nuevo

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nameuser VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);
INSERT INTO users (nameuser, password) VALUES ('UsuarioEjemplo', 'Contraseña123');

SELECT * FROM users