import {Phone} from './Phone'

export class Student {
    _id:string;
    name:string;
    email: string;
    phones:Phone[];

    constructor(_id='', name='',email='', phones =new Array<Phone>()){
        this._id = _id;
        this.name = name;
        this.email = email;
        this.phones = phones;
    }
   
}