import {Router} from 'express' 
import {buscar,crear,editar} from "../controller/sistema"
const route = Router()

route.get('/', buscar)
route.post('/', crear)
route.post('/:id', editar)

export default route