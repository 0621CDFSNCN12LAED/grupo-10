CREATE TABLE categoria_usuario (
     id INT (10) UNSIGNED NOT NULL AUTO_INCREMENT,
     categoria VARCHAR (100),
     CONSTRAINT PKid PRIMARY KEY (id)
);

CREATE TABLE categorias_productos (
    id INT (10) UNSIGNED NOT NULL AUTO_INCREMENT,
    CONSTRAINT PKid PRIMARY KEY (id),
    categoria VARCHAR (100)
);

CREATE TABLE Usuarios (
    id INT (10) UNSIGNED NOT NULL AUTO_INCREMENT,
    nombre VARCHAR (100),
    apellido VARCHAR (100),
    deireccion VARCHAR (100),
    edad TINYINT (10),
    email VARCHAR (100),
    CONSTRAINT PKid PRIMARY KEY (id),
    categoria_usuario_id INT(10) UNSIGNED NOT NULL,
    FOREIGN KEY (categoria_usuario_id) REFERENCES categoria_usuario (id)
);


CREATE TABLE productos (
    id INT (10) UNSIGNED NOT NULL AUTO_INCREMENT,
    nombre VARCHAR (100),
    descripcion TEXT,
    precio INT (10),
    CONSTRAINT PKid PRIMARY KEY (id),
    categorias_productos_id  INT(10) UNSIGNED NOT NULL,
    FOREIGN KEY (categorias_productos_id) REFERENCES categorias_productos (id)
    
);

CREATE TABLE carrito_de_compras (
    id INT (10) UNSIGNED NOT NULL AUTO_INCREMENT,
    cantidad TINYINT (10),
    precio INT (10),
    CONSTRAINT PKid PRIMARY KEY (id),
    usuario_id  INT (10) UNSIGNED NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios (id),
    productos_id INT(10) UNSIGNED NOT NULL,
    FOREIGN KEY (productos_id) REFERENCES productos (id)
);


CREATE TABLE carrito_productos (
     id INT (10) UNSIGNED NOT NULL AUTO_INCREMENT,
     precio_total INT(10),
     CONSTRAINT PKid PRIMARY KEY (id),
     carrito_de_compras_id  INT(10) UNSIGNED NOT NULL,
     FOREIGN KEY (carrito_de_compras_id) REFERENCES carrito_de_compras (id)

)
