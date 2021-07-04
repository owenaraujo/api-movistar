export function save(req, res) {
    const datos = req.body
    console.log(datos);
}
export function editar(req,res) {
const {id}= req.params
const datos = req.body
console.log(datos, id);
}
export function boorar(req, res) {
    const {id} = req.body
    const status= {status: false}
    console.log(status, id);
}
export function activar(req,res) {
    const {id}= req.params
    const status= {status: true}
    console.log(status, id);

}
export function filtroFecha(req,res) {
    const {inicio, fin}= req.params
    console.log(inicio, fin);
}
export function limit(req, res) {
    const {count}= req.params
    console.log(count);
}
export function borrar(req, res) {
    const  {id}= req.params
    const status= {status: true}
    console.log(status, id);
}
export function agregar(req, res) {
    const datos = req.body
    console.log(datos);
}