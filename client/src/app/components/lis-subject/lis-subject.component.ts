import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'src/app/interfaces/Subject';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-lis-subject',
  templateUrl: './lis-subject.component.html',
  styleUrls: ['./lis-subject.component.css']
})
export class LisSubjectComponent implements OnInit {

  subjects: Subject[];

  constructor(private subjectService: SubjectService, private router: Router) {
    this.subjects = new Array();
   }

  ngOnInit(): void {
    this.subjectService.getSubjects().subscribe(
      res => {this.subjects = res},
      err=> console.log(err)
    );
  }

  selectedCard(id: string){
    this.router.navigate(['/asignaturas',id]);
  }


}
