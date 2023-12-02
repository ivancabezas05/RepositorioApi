import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Usuario from './Usuario.js';
import libro from './libro.js';


const Reserva = sequelize.define('reserva', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    fecha_reserva: {
        type: DataTypes.DATE
    },
    fecha_devolucion: {
        type:DataTypes.DATE
    },

    usuarioid: {
        type: DataTypes.INTEGER
    },

    libroid: {
        type: DataTypes.INTEGER
    }

},
    { timestamps: false})

Reserva.belongsTo(Usuario, {
    foreignKey: 'usuarioid',
    targetId: 'id'
});

Reserva.belongsTo(libro, {
    foreignKey: 'libroid',
    targetId: 'id'
}
);


export default Reserva;