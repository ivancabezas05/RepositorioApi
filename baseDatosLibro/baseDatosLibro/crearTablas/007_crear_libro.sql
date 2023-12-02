create TABLE libro(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    titulo VARCHAR(250) NOT NULL,
    serie INTEGER NOT NULL,
    ISBN VARCHAR(250) NOT NULL,
    imagen_url VARCHAR(100) NOT NULL,
    disponibilidad BOOLEAN,
    descripcion VARCHAR(1000),
    autor_id INTEGER,
    editorial_id INTEGER,
    FOREIGN KEY (autor_id) REFERENCES autor(id) ON DELETE CASCADE,
    FOREIGN KEY (editorial_id) REFERENCES editorial(id) ON DELETE CASCADE,

);

CREATE TABLE libro (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(250) NOT NULL,
    serie INTEGER NOT NULL,
    ISBN INTEGER NOT NULL,
    imagen_url VARCHAR(100) NOT NULL,
    disponibilidad BOOLEAN,
    descripcion VARCHAR(1000),
    autor_id INTEGER,
    editorial_id INTEGER,
    FOREIGN KEY (autor_id) REFERENCES autor(id) ON DELETE CASCADE,
    FOREIGN KEY (editorial_id) REFERENCES editorial(id) ON DELETE CASCADE
);

