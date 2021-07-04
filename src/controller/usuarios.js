import usuarios from "../models/usuarios";
import { createToken } from "../midleware/token";
export async function login(req, res) {
  try {
    const { username, password } = req.body;
    const data = await usuarios.findOne({ username: username });
    console.log();
    if (!data) {
      res.json({ data: "usuario no encontrado", status: null });
    } else {
      let token = false;
      (await usuarios.compare(password, data.password))
        ? (token = await createToken(data._id))
        : (token = false);
      token
        ? res.json({ data: token, status: true })
        : res.json({ data: "contrase;a incorrecta", status: false });
    }
      } catch (e) {
    console.log(e);
  }
}

export async function save(req, res) {
  try {
    const datos = req.body;
    const fetch = usuarios.findOne({ username: usuario.username });
    if (!fetch) {
      await new usuarios(datos).save();
      res.json(true);
    } else {
      res.json(null);
    }
  } catch (e) {
    res.json(false);
  }
}
export function editar(req, res) {
  const { id } = req.params;
  const datos = req.body;
  console.log(datos, id);
}

export function activar(req, res) {
  const { id } = req.params;
  const status = { status: true };
  console.log(status, id);
}
export function filtroFecha(req, res) {
  const { inicio, fin } = req.params;
  console.log(inicio, fin);
}
export function limit(req, res) {
  const { count } = req.params;
  console.log(count);
}
export function desactivar(req, res) {
  const { id } = req.params;
  const status = { status: true };
  console.log(status, id);
}
export async function buscar(req, res) {
  const usuario = await usuarios.find();
  res.json(usuario);
}
