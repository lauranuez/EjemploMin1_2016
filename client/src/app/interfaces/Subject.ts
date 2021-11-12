
import {Student} from './Student'

export class Subject {
    _id:string;
    name:string;
    students: Student[];

    constructor(_id='', name='', students=new Array<Student>() ){
        this._id = _id;
        this.name = name;
        this.students = students;
    }
   
}