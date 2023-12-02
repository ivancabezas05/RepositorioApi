create TABLE reserva(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    fecha_reserva DATE NOT NULL,
    fecha_devolucion DATE NOT NULL,
    usuario_id INTEGER,
    libro_id INTEGER,
    FOREIGN KEY (usuario_id) REFERENCES tipo_Usuario(id) ON DELETE CASCADE,
    FOREIGN KEY (libro_id) REFERENCES libro(id) ON DELETE CASCADE
); 


CREATE TABLE reserva (
    id SERIAL PRIMARY KEY,
    fecha_reserva DATE NOT NULL,
    fecha_devolucion DATE NOT NULL,
    usuario_id INTEGER,
    libro_id INTEGER,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id) ON DELETE CASCADE,
    FOREIGN KEY (libro_id) REFERENCES libro(id) ON DELETE CASCADE
);