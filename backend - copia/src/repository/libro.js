/*import RepositoryBase from './base.js'
import libro from '../model/libro.js'
import libro_Categoria from '../model/libro_Categoria.js'

const libroRepository = new RepositoryBase(libro);
const librocategoriaRepository = new RepositoryBase(libro_Categoria);

const create = async (objlibro) => {
    try {
        const newlibro = await libroRepository.create(objlibro);

        if (newlibro) {
            objlibro.categorias.forEach( async (objcategoria) => {
                const obj = {
                    idlibro: newlibro.id,
                    idCategoria: objcategoria.id
                }

                await librocategoriaRepository.create(obj);
                
            });
        }

        objlibro.id = newlibro.id;

        return objlibro;
    } catch(err) {
        console.error(err);
        return null;
    }
    
}

const findOne = async (id) => await libroRepository.findOne(id);
const remove = async (id) => await libroRepository.remove(id);
const update = async (objlibro) => await libroRepository.update(objlibro);
const findAll = async() => await libroRepository.findAll();
export default { create, findOne, remove, update, findAll } */