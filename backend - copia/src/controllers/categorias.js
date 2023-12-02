import RepositoryBase from "../repository/base.js";
import modelo from '../model/categorias.js'

const categoriaRepository = new RepositoryBase(modelo);

const findAll = async (req,res) => {

    const Usuario = await categoriaRepository.findAll();

    return res.status(200).json(Usuario);

}

const create = async (req,res) => {
    const result = await categoriaRepository.create(req.body);

    return res.status(200).json(result);
}

const findOne = async (req,res) => {
    const id = req.params.id;
    const result = await categoriaRepository.findOne(id);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'No encontrado.'})

}

const update = async (req,res) => {
    const result = await categoriaRepository.update(req.body);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const remove = async (req,res) => {
    const id = req.params.id;
    
    const result = await categoriaRepository.remove(id);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const categoriaController = { findAll, create, findOne, update, remove }

export default categoriaController;