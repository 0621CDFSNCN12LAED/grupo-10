CREATE TABLE productos (
    id INT (10) UNSIGNED NOT NULL AUTO_INCREMENT,
    nombre VARCHAR (100),
    descripcion TEXT,
    precio INT (10),
    img VARCHAR (100),
    categorias  VARCHAR (100),
    CONSTRAINT PKid PRIMARY KEY (id)
);

CREATE TABLE usuarios (
    id INT (10) UNSIGNED NOT NULL AUTO_INCREMENT,
    Nombre VARCHAR (100),
    Apellido VARCHAR (100),
    Direccion VARCHAR (100),
    Edad TINYINT (10),
    Email VARCHAR (100),
    img VARCHAR (100),
    contraseña VARCHAR (100),
    CONSTRAINT PKid PRIMARY KEY (id)
);

--------------------------------------------------------------------------
--------------------------------------------------------------------------
--------------------------------------------------------------------------

/* tablas a modificar*/


CREATE TABLE carritoProductos (
     id INT (10) UNSIGNED NOT NULL AUTO_INCREMENT,
     precio_total INT(10),

);


CREATE TABLE tablaRelacional (
    id INT (10) UNSIGNED NOT NULL AUTO_INCREMENT,
    usuario_id INT UNSIGNED (10) NOT NULL,
    productos_id INT (10) UNSIGNED NOT NULL,
    carritoProductos_id INT (10) UNSIGNED NOT NULL,
    cantidad INT (10),
    CONSTRAINT PKid PRIMARY KEY (usuario_id, productos_id, carrito_productos_id),
    CONSTRAINT FK_usuario_id FOREIGN KEY (usuario_id) REFERENCES usuarios (id),
    CONSTRAINT FK_productos_id FOREIGN KEY (productos_id) REFERENCES productos (id),
    CONSTRAINT FK_carritoProductos_id FOREIGN KEY (carritoProductos_id) REFERENCES carritoProductos (id),
);


