create TABLE usuario(
    id INTEGER SERIAL NOT NULL PRIMARY KEY,
    nombres VARCHAR(250) NOT NULL,
    apellidos VARCHAR(250) NOT NULL,
    foto_url VARCHAR(250),
    nro_documento VARCHAR(25) NOT NULL,
    correo_electronico VARCHAR(100) NOT NULL,
    contrasena VARCHAR(250) NOT NULL,
    idioma VARCHAR(250),
    prefijo VARCHAR(250),
    color VARCHAR(250),
    id_tipo_documento INTEGER NOT NULL,
    id_tipo_usuario INTEGER NOT NULL,
    
    FOREIGN KEY (tipo_documento) REFERENCES tipo_Documento(id) ON DELETE CASCADE,
    FOREIGN KEY (tipo_usuario) REFERENCES tipo_Usuario(id) ON DELETE CASCADE,
);


CREATE TABLE usuario (
    id SERIAL PRIMARY KEY,
    nombres VARCHAR(250) NOT NULL,
    apellidos VARCHAR(250) NOT NULL,
    foto_url VARCHAR(250),
    nro_documento VARCHAR(25) NOT NULL,
    correo_electronico VARCHAR(100) NOT NULL,
    contrasena VARCHAR(250) NOT NULL,
    idioma VARCHAR(250),
    prefijo VARCHAR(250),
    color VARCHAR(250),
    id_tipo_documento INTEGER NOT NULL,
    id_tipo_usuario INTEGER NOT NULL,
    
    FOREIGN KEY (id_tipo_documento) REFERENCES tipo_Documento(id) ON DELETE CASCADE,
    FOREIGN KEY (id_tipo_usuario) REFERENCES tipo_Usuario(id) ON DELETE CASCADE
);
