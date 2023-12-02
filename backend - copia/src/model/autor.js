import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const autor = sequelize.define('autor', {
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

export default autor;