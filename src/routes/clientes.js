import {Router} from 'express'
import {save, editar} from '../controller/clientes'
const route = Router()
route.get('/default',(req,res)=>{
    res.json('default')
})
route.get('/', save, editar)
route.post('/')
route.put('/:id')
route.delete('/:id')
route.get('/:id')
route.get('/limit/:count')
export default route