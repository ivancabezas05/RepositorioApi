import RepositoryBase from "../repository/base.js";
import modelo from "../model/reserva.js";

const reservaRepository = new RepositoryBase(modelo);

const findAll = async (req,res) => {

    const curso = await reservaRepository.findAll();

    return res.status(200).json(curso);

}

const create = async(req,res) => {
    const result = await reservaRepository.create(req.body);

    return res.status(200).json(result);
}

const findOne = async(req,res) => {
    const id = req.params.id;
    const result = await reservaRepository.findOne(id);

    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'No encontrado.'})

}

const update = async (req,res) => {
    const result = await reservaRepository.update(req.body);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

const remove = async (req,res) => {
    const id = req.params.id;
    
    const result = await reservaRepository.remove(id);

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}

/*const findAllComplete = (req,res) => {
    const result = service.findAllComplete();

    if (result)
        return res.status(200).json(result);
    else    
        return res.status(500).json({ message: 'No encontrado.'})
}*/

const controller = { findAll, create, findOne, update, remove}

export default controller;