import {Router} from 'express'
const route = Router()
route.get('/default',(req,res)=>{
    res.json('default')
})

route.get('/')
route.get('/:id')
route.get('/limit/:count')
route.put('/:id')
route.delete('/:id')
export default route