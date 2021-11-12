import {Schema, model, Document} from 'mongoose';
import { Phone } from './phone';


const StudentSchema = new Schema({
    name:{ type: String, required: true },
    email:{ type: String, required: true },
    phones:{ type: Object }
});

export interface IStudent extends Document {
    name:string,
    email:string,
    phones:Phone[],
}

export default model<IStudent>('Student', StudentSchema);