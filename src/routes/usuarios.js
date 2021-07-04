import {Router} from 'express'
import {buscar, save, login} from'../controller/usuarios'
const route = Router()

route.post('/', save)
route.post('/login', login)
route.get('/', buscar)
route.get('/:id')
route.get('/limit/:count')
route.put('/:id')
route.delete('/:id')
export default route