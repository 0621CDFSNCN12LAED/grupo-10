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


INSERT INTO usuarios(id,Nombre,Apellido,Direccion,Edad,Email,img,contraseña) 
VALUES(DEFAULT,'pepito','flores','calle 123',30,'pepito@flores.com','/users/1636988252556.png','$2a$12$vKMAMJ8Z7ZuhyOo7.MqPf.2cQM7hjuIzVESOUBu2YN6CorFIY.Duq'),
(DEFAULT,'manolo','perez','semudo 123',35,'manolo@perez.com','/users/1636988324988.jpeg','$2a$12$BVuvX9aYBOOejmKheclekusYLI2tC4ZzCvrV/MBDuLhNzJ3Dm3AWu'),
(DEFAULT,'eustaclia','chacon','indefinida 123',25,'eustaclia@chacon.com','/users/1636988400769.jpg','$2a$12$FkJry5GzIh3CGXdEjsMN2ueJ7d7TRFjp/zshOrfrAydGrVcBinzNG'),
(DEFAULT,'reboldio','hochimil','calle de algun lado',45,'reboldio@hochimil.com','/users/1636988477107.jpg','$2a$12$Ckx/U6m0.o2vGZo4oRYIpuFBXJJdoNSCTCjp5DgTkzGuhpoe.AOoS');

/* TODAS LAS CONTRASEÑAS DE LOS USUARIOS SON: 123456789*/

INSERT INTO productos(id,nombre,descripcion,precio,img,categorias) 
VALUES(DEFAULT,'Sillon',X'53696c6c6f6e2064652064697365c3b16f2e2054616d61c3b16f3a20332063756572706f732e20486563686f20656e2070616e61',60000,'/img/1636982880869.jpg','Muebles'),
(DEFAULT,'Set de mesas ratonas',X'53657420646520646f73206d65736173207261746f6e61732e204d6164657261207061726169736f20636f6e20746170612073696d696c206d61726d6f6c20626c616e636f2e',20000,'/img/1636982920687.jpg','Muebles'),
(DEFAULT,'Macetero hierro mas planta.',X'54614d6163657465726f2064652068696572726f2c206d65646964613a20363020636d20616c746f2e20506c616e74613a2048656c6563686f2e',3000,'/img/1636983016715.jpeg','Plantas'),
(DEFAULT,'Macetero mini mas plantas',X'4d6163657465726f2064652068696572726f2c206d65646964613a20333020636d20646520616c746f2e20506c616e74613a205365637563756c656e7461732e',4000,'/img/1636983195377.jpeg','plantas'),
(DEFAULT,'Set maceteros de escritorio',X'5365742064652074726573206d6163657465726f73206465206573637269746f72696f2e205669656e6520636f6e20737563756c656e746173206120656c656363696f6e2e',4000,'/img/1636983159266.jpeg','Plantas'),
(DEFAULT,'Macetero de escritorio',X'4d6163657465726f20696e646976696475616c206465206573637269746f72696f2e205669656e6520636f6e20737563756c656e7461206120656c656363696f6e2e',2500,'/img/1636983242586.jpeg','Plantas'),
(DEFAULT,'Velador mimbre',X'56656c61646f72206465206d696d62726520636f6c6f72206172656e612e20436f6e6578696f6e206361626c6561646f207061726120746f6d61636f727269656e74652e20456e636875666520646520646f73207061746173202d204d6564696461733a20333020636d20616e63686f20706f7220353020636d20616c746f2e202d204f62736572766163696f6e65733a20456c2070726f647563746f207669656e652073696e206c616d706172612e',2500,'/img/1636983291041.jpeg','Iluminacion'),
(DEFAULT,'Lampara mimbre',X'4c616d70617261206465206d696d62726520636f6c6f72206172656e612e20436f6e6578696f6e206361626c6561646f207061726120746f6d61636f727269656e74652e202d204d6564696461733a20333020636d20616e63686f20706f7220353020636d20616c746f2e202d204d6564696461733a20333020636d20616e63686f20706f7220353020636d20616c746f2e',4500,'/img/1636983353763.jpeg','Iluminacion'),
(DEFAULT,'Velador de hierro',X'56656c61646f722064652068696572726f20656e20636f6c6f72206e6567726f2e20436f6e6578696f6e206361626c6561646f207061726120746f6d61636f727269656e74652e20456e636875666520646520646f73207061746173202d204d6564696461733a20333020636d20616e63686f20706f7220353020636d20616c746f2e202d204f62736572766163696f6e65733a20456c2070726f647563746f207669656e652073696e206c616d706172612e',3000,'/img/1636983419430.jpg','Iluminacion'),
(DEFAULT,'Lampara de hierro',X'4c616d706172612064652068696572726f20636f6c6f72206e6567726f2e20436f6e6578696f6e206361626c6561646f207061726120746f6d61636f727269656e74652e202d20204d6564696461733a20333020636d20616e63686f20706f7220353020636d20616c746f2e202d204f62736572766163696f6e65733a20456c2070726f647563746f207669656e652073696e206c616d706172612e',4500,'/img/1636983496523.jpg','Iluminacion'),
(DEFAULT,'Sillon gris',X'53696c6c6f6e2064652064697365c3b16f2e2054616d61c3b16f3a20332063756572706f732e20486563686f20656e2070616e61',60000,'/img/1636983608986.jpg','Muebles'),
(DEFAULT,'Mesita',X'4d657361207261746f6e612070617261206c6976696e67',15000,'/img/1636983811582.jpeg','Muebles');

--------------------------------------------------------------------------
--------------------------------------------------------------------------
--------------------------------------------------------------------------

/* tablas a modificar*/


-- CREATE TABLE carritoProductos (
--      id INT (10) UNSIGNED NOT NULL AUTO_INCREMENT,
--      precio_total INT(10),

-- );


-- CREATE TABLE tablaRelacional (
--     id INT (10) UNSIGNED NOT NULL AUTO_INCREMENT,
--     usuario_id INT UNSIGNED (10) NOT NULL,
--     productos_id INT (10) UNSIGNED NOT NULL,
--     carritoProductos_id INT (10) UNSIGNED NOT NULL,
--     cantidad INT (10),
--     CONSTRAINT PKid PRIMARY KEY (usuario_id, productos_id, carrito_productos_id),
--     CONSTRAINT FK_usuario_id FOREIGN KEY (usuario_id) REFERENCES usuarios (id),
--     CONSTRAINT FK_productos_id FOREIGN KEY (productos_id) REFERENCES productos (id),
--     CONSTRAINT FK_carritoProductos_id FOREIGN KEY (carritoProductos_id) REFERENCES carritoProductos (id),
-- );


