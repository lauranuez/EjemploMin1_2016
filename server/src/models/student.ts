import {Schema, model, Document} from 'mongoose';


const StudentSchema = new Schema({
    name:{ type: String, required: true },
    email:{ type: String, required: true },
    phones:[{ name:String , address: String}]
});

export interface IStudent extends Document {
    name:string,
    email:string,
    phones:[{ name: string , address: string}],
}

export default model<IStudent>('Student', StudentSchema);