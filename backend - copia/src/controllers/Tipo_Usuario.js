import RepositoryBase from "../repository/base.js";
import modelo from '../model/Tipo_Usuario.js'

const tipousuarioRepository = new RepositoryBase(modelo);

const findAll = async (req,res) => {

    const Usuario = await tipousuarioRepository.findAll();

    return res.status(200).json(Usuario);

}

const create = async (req,res) => {
    const result = await tipousuarioRepository.create(req.body);

    return res.status(200).json(result);
}

const findOne = async (req,res) => {
    const id = req.params.id;
    const result = await tipousuarioRepository.findOne(id);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'No encontrado.'})

}

const update = async (req,res) => {
    const result = await tipousuarioRepository.update(req.body);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const remove = async (req,res) => {
    const id = req.params.id;
    
    const result = await tipousuarioRepository.remove(id);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const tipousuarioController = { findAll, create, findOne, update, remove }

export default tipousuarioController;