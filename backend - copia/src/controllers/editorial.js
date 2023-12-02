import RepositoryBase from "../repository/base.js";
import modelo from '../model/editorial.js'

const editorialRepository = new RepositoryBase(modelo);

const findAll = async (req,res) => {

    const Usuario = await editorialRepository.findAll();

    return res.status(200).json(Usuario);

}

const create = async (req,res) => {
    const result = await editorialRepository.create(req.body);

    return res.status(200).json(result);
}

const findOne = async (req,res) => {
    const id = req.params.id;
    const result = await editorialRepository.findOne(id);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'No encontrado.'})

}

const update = async (req,res) => {
    const result = await editorialRepository.update(req.body);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const remove = async (req,res) => {
    const id = req.params.id;
    
    const result = await editorialRepository.remove(id);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const editorialController = { findAll, create, findOne, update, remove }

export default editorialController;