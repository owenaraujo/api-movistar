import {Router} from 'express'
import{save, get} from "../controller/ventas"
const route = Router()
route.get('/default',(req,res)=>{
    res.json('default')
})

route.get('/', get)
route.post('/',save)
route.get('/:inicio/:fin')
route.get('/:id')
route.get('/limit/:count')
route.put('/:id')
route.delete('/:id')
export default route