import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import tipo_documento from './Tipo_documento.js';
import tipo_usuario from './Tipo_Usuario.js';



const Usuario = sequelize.define('usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellidos: {
        type:DataTypes.STRING
    },
    foto_url:{
        type: DataTypes.STRING
    },
    nro_documento:{
        type: DataTypes.STRING
    },
    correo_electronico:{
        type: DataTypes.STRING
    },

    contrasena:{
        type: DataTypes.STRING
    },
    
    idioma:{
        type: DataTypes.STRING
    },

    prefijo:{
        type: DataTypes.STRING
    },

    color:{
        type: DataTypes.STRING
    },
    
    idtipodocumento: {
        type: DataTypes.INTEGER
    },

    idtipousuario: {
        type: DataTypes.INTEGER
    }


    
},
{ timestamps: false}
)

Usuario.belongsTo(tipo_documento, {
    foreignKey: 'idtipodocumento',
    targetId: 'id'
});


Usuario.belongsTo(tipo_usuario, {
    foreignKey: 'idtipousuario',
    targetId: 'id'
}
);


export default Usuario;