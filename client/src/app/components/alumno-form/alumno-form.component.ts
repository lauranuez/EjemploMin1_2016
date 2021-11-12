import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phone } from 'src/app/interfaces/Phone';
import { Student } from 'src/app/interfaces/Student';
import { Subject } from 'src/app/interfaces/Subject';
import { StudentService } from 'src/app/services/student.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-alumno-form',
  templateUrl: './alumno-form.component.html',
  styleUrls: ['./alumno-form.component.css']
})
export class AlumnoFormComponent implements OnInit {
  id:string;
  subject: Subject;

  constructor(private studenService:StudentService, private subjectService:SubjectService, private router:Router, private activateRoute: ActivatedRoute) { 
    this.id = '';
    this.subject = new Subject();
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      console.log(params['id']);
      this.id = params['id'];
      this.subjectService.getSubject(this.id).subscribe(
        res=> {
          this.subject=res;
          console.log(res)},
        err => console.log (err)
      )
    })    
  }


addAlumno(name:HTMLInputElement, phone1: HTMLInputElement, phone2: HTMLInputElement, email: HTMLInputElement): boolean {
  
    const phones = [{name:"home",address:phone1.value},{name:"work",address:phone2.value}];
    const student:Student = {'_id': '', 'name': name.value,'email':email.value, 'phones': phones};

    this.studenService.createStudent(student)
    .subscribe(res => {
      console.log(res);
    }, err => console.log(err))

    this.subjectService.updateSubject(this.id, this.subject).subscribe(
      res =>{ console.log(res);
      this.router.navigate(['/asignaturas'])},
      err => console.log(err),
    )
  return false;

}}


