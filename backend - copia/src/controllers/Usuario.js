import RepositoryBase from "../repository/base.js";
import modelo from '../model/Usuario.js'

const UsuarioRepository = new RepositoryBase(modelo);

const findAll = async (req,res) => {

    const Usuario = await UsuarioRepository.findAll();

    return res.status(200).json(Usuario);

}

const create = async (req,res) => {
    const result = await UsuarioRepository.create(req.body);

    return res.status(200).json(result);
}

const findOne = async (req,res) => {
    const id = req.params.id;
    const result = await UsuarioRepository.findOne(id);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'No encontrado.'})

}

const update = async (req,res) => {
    const result = await UsuarioRepository.update(req.body);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const remove = async (req,res) => {
    const id = req.params.id;
    
    const result = await UsuarioRepository.remove(id);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const usuarioController = { findAll, create, findOne, update, remove }

export default usuarioController;