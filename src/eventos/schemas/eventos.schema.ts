import { Schema } from "mongoose";

export const EventoSchema = new Schema({
    fecha: { type: Date, required: true },
    descripcion: { type: String, required: true },
    lugar:{ type: String, required: true},
    tipo:{type: String, requiered: true}
  });
  