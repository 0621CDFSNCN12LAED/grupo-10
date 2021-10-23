CREATE TABLE categoria_usuario (
     id INT (10) UNSIGNED NOT NULL AUTO_INCREMENT,
     categoria VARCHAR (100),
     CONSTRAINT PKid PRIMARY KEY (id)
);


CREATE TABLE Usuarios (
    id INT (10) UNSIGNED NOT NULL AUTO_INCREMENT,
    nombre VARCHAR (100),
    apellido VARCHAR (100),
    deireccion VARCHAR (100),
    edad TINYINT (10),
    email VARCHAR (100),
    CONSTRAINT PKid PRIMARY KEY (id)

    CONSTRAINT XXX FOREIGN KEY XXX REFERENCES categoria_usuario_id
);



CREATE TABLE carrito_de_compras (
    id INT (10) UNSIGNED NOT NULL AUTO_INCREMENT,
    cantidad TINYINT (10)
    precio INT (10)
    CONSTRAINT PKid PRIMARY KEY (id)

    CONSTRAINT XXX FOREIGN KEY XXX REFERENCES categoria_usuario_id
    CONSTRAINT XXX FOREIGN KEY XXX REFERENCES categoria_usuario_id
);

CREATE TABLE productos (
    id INT (10) UNSIGNED NOT NULL AUTO_INCREMENT,
    nombre VARCHAR (100),
    descripcion TEXT,
    precio INT (10),
    CONSTRAINT PKid PRIMARY KEY (id),
    CONSTRAINT categorias_productos_id FOREIGN KEY XXX REFERENCES categoria_usuario_id,
    
);

CREATE TABLE categorias_productos (
    id INT (10) UNSIGNED NOT NULL AUTO_INCREMENT,
    categoria VARCHAR (100),
);




