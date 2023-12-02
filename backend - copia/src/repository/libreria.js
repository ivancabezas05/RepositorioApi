/*import RepositoryBase from "./base";
import Usuario from "../model/Usuario";
import libro from "../model/libro";



const UsuarioRepository = new RepositoryBase(Usuario);
const libroRepository = new RepositoryBase(libro);

const create = async (objUsuario) => {
    try {
        const newUsuario = await UsuarioRepository.create(objUsuario);

        if (newUsuario) {
            objUsuario.cursos.forEach( async (objCurso) => {
                const obj = {
                    idUsuario: newUsuario.id,
                    idlibro: objlibro.id
                }

                await libroRepository.create(obj);
                
            });
        }

        objUsuario.id = newUsuario.id;

        return objUsuario;
    } catch(err) {
        console.error(err);
        return null;
    }
    
}

const findOne = async (id) => await UsuarioRepository.findOne(id);
const remove = async (id) => await UsuarioRepository.remove(id);
const update = async (objUsuario) => await UsuarioRepository.update(objUsuario);
const findAll = async() => await UsuarioRepository.findAll();
 
export default { create, findOne, remove, update, findAll }
*/