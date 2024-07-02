import { Schema } from "mongoose";
export declare const EventoSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    fecha: Date;
    descripcion: string;
    lugar: string;
    tipo?: string;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    fecha: Date;
    descripcion: string;
    lugar: string;
    tipo?: string;
}>> & import("mongoose").FlatRecord<{
    fecha: Date;
    descripcion: string;
    lugar: string;
    tipo?: string;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>;
