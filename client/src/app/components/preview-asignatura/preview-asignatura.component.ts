import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/interfaces/Student';
import { Subject } from 'src/app/interfaces/Subject';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-preview-asignatura',
  templateUrl: './preview-asignatura.component.html',
  styleUrls: ['./preview-asignatura.component.css']
})
export class PreviewAsignaturaComponent implements OnInit {
  id:string;
  subject: Subject;
  student: Student;
  idSubject: string;

  constructor(private subjectService: SubjectService, private router: Router, private activateRoute: ActivatedRoute) { 
    this.subject = new Subject();
    this.id = '';
    this.idSubject = '';
    this.student = new Student();
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      console.log(params['id']);
      this.id = params['id'];
      this.subjectService.getSubject(this.id).subscribe(
        res=> {
          this.subject=res;
          console.log(res);
          console.log(this.subject.students[0])},
        err => console.log (err)
      )
    })
  }
  selectedCard(id: string){
    this.router.navigate(['/asignaturas/alumno',this.subject.students[0]]);
  }
  addAlumno(id: string){
    this.router.navigate(['/asignaturas/addAlumno',id]);
  }
}
