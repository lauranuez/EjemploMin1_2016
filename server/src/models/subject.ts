import {Schema, model, Document} from 'mongoose';
import Student, {IStudent} from './student';


const SubjectSchema = new Schema({
    name:{ type: String, required: true },
    students:[{ type:Schema.Types.ObjectId, required: true, ref:Student }]
});

interface ISubject extends Document {
    name:string,
    students:IStudent['_id']
}

export default model<ISubject>('Subject', SubjectSchema);