import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phone } from 'src/app/interfaces/Phone';
import { Student } from 'src/app/interfaces/Student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-preview-alumno',
  templateUrl: './preview-alumno.component.html',
  styleUrls: ['./preview-alumno.component.css']
})
export class PreviewAlumnoComponent implements OnInit {

  student:Student;
  id:string;
  index:number;
  phone1:Phone;
  phone2:Phone;

  constructor(private studentService:StudentService,private router:Router, private activateRoute: ActivatedRoute) { 
    this.student=new Student();
    this.id='';
    this.index = 0;
    this.phone1 = <Phone>{};
    this.phone2 = <Phone>{};
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      console.log(params['id']);
      this.id = params['id'];});    

    this.studentService.getStudent(this.id).subscribe(
      res=> {
        this.student=res;
        this.phone1=this.student.phones[0];
        this.phone2=this.student.phones[1];
        console.log(res)
        console.log(this.phone1)},
      err => console.log (err)
    )
  }

}
