import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Student } from '../interfaces/Student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  readonly URL_API = 'http://localhost:4000/student';

  constructor(private http:HttpClient) { }

  createStudent(student: Student ){
    return this.http.post(this.URL_API,student);
  }

  getStudents(){
    return this.http.get<Student[]>(this.URL_API);
  }

  getStudent(id: string){
    return this.http.get<Student>(`${this.URL_API}/${id}`);
  }
  deleteStudent(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
}
