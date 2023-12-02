import RepositoryBase from "../repository/base.js";
import modelo from '../model/Tipo_documento.js'

const tipodocumentoRepository = new RepositoryBase(modelo);

const findAll = async (req,res) => {

    const Usuario = await tipodocumentoRepository.findAll();

    return res.status(200).json(Usuario);

}

const create = async (req,res) => {
    const result = await tipodocumentoRepository.create(req.body);

    return res.status(200).json(result);
}

const findOne = async (req,res) => {
    const id = req.params.id;
    const result = await tipodocumentoRepository.findOne(id);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'No encontrado.'})

}

const update = async (req,res) => {
    const result = await tipodocumentoRepository.update(req.body);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const remove = async (req,res) => {
    const id = req.params.id;
    
    const result = await tipodocumentoRepository.remove(id);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const tipodocumentoController = { findAll, create, findOne, update, remove }

export default tipodocumentoController;