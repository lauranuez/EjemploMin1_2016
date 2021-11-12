import {Schema, model, Document} from 'mongoose';
import Student, {IStudent} from './student';


const SubjectSchema = new Schema({
    name: String,
    students: [{
        type: Schema.Types.ObjectId,
        ref: Student
    }]
})

export interface ISubject extends Document {
    name: string;
    students: IStudent['_id']
}

export default model<ISubject>('Subject', SubjectSchema);


