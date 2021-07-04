import { model, Schema } from "mongoose";

const rol = new Schema({
nombre:{type: String},
grado:{type: Number}
})
export default model('roles', rol)