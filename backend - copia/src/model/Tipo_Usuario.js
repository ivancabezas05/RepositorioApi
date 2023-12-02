import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const tipo_usuario = sequelize.define('tipo_usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING
    }
},
{ timestamps: false}
)

export default tipo_usuario;