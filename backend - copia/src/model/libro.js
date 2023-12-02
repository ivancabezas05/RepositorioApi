import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import autor from './autor.js';
import editorial from './editorial.js';
import categoria from './categorias.js';

const libro = sequelize.define('libro', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    titulo: {
        type: DataTypes.STRING
    },
    serie: {
        type:DataTypes.INTEGER
    },
    isbn:{
        type: DataTypes.STRING
    },
    
    imagen_url:{
        type: DataTypes.STRING
    },
    
    disponibilidad:{
        type: DataTypes.BOOLEAN
    },

    descripcion:{
        type: DataTypes.STRING
    },

    autorid: {
        type: DataTypes.INTEGER
    },

    editorialid: {
        type: DataTypes.INTEGER
    },

    categoriaid:{
        type: DataTypes.INTEGER
    }

},
{ timestamps: false}
)

libro.belongsTo(autor, {
    foreignKey: 'autorid',
    targetId: 'id'
});

libro.belongsTo(editorial,{
    foreignKey: 'editorialid',
    targetId: 'id'
})

libro.belongsTo(categoria,{
    foreignKey: 'categoriaid',
    targetId: 'id'
})




export default libro;