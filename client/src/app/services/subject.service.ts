import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Subject } from '../interfaces/Subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  readonly URL_API = 'http://localhost:4000/subject';
  constructor(private http:HttpClient) { }

  createSubject(subject: Subject ){
    return this.http.post(this.URL_API,subject);
  }

  getSubjects(){
    return this.http.get<Subject[]>(this.URL_API);
  }

  getSubject(id: string){
    return this.http.get<Subject>(`${this.URL_API}/${id}`);
  }
  deleteSubject(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
  updateSubject(id:string, subject:Subject){
    return this.http.put(`${this.URL_API}/${id}`, subject);
  }
}
