import {Router} from 'express'
const route = Router()
import {save,buscarId, buscar, desactivar, activar, actualizar} from '../controller/proveedores'
route.get('/default',(req,res)=>{
    res.json('default')
})

route.get('/', buscar)
route.get('/:id', buscarId)
route.post('/', save)
route.post('/:id', actualizar)
route.delete('/:id',desactivar)
route.get('/limit/:count')
route.delete('/activate/:id', activar)
route.put('/:id')
export default route