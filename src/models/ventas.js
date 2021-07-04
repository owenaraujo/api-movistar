import { model, Schema } from "mongoose";

const venta = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: "usuarios" },
  cliente_id: { type: Schema.Types.ObjectId, ref: "clientes" },
  productos: [
    {
      precio: { type: Number },
      imei: { type: Number },
      cantidad: { type: Number },
      iva: { type: Number },
      producto_id: { type: Schema.Types.ObjectId, ref: "productos" },
    },
  ],
  nota: {type: String, required: false},
  dolar: {type: Number, required: false},
  canceled: {type: Boolean, default: false},
}
,{
  versionKey : false, timestamps: true
});
export default model('ventas', venta)