import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LisSubjectComponent } from './components/lis-subject/lis-subject.component';
import { AlumnoFormComponent } from './components/alumno-form/alumno-form.component';
import { PreviewAlumnoComponent } from './components/preview-alumno/preview-alumno.component';
import { PreviewAsignaturaComponent } from './components/preview-asignatura/preview-asignatura.component';

const routes: Routes = [
  {
    path: 'asignaturas',
    component: LisSubjectComponent
  },
  {
    path: 'asignaturas/addAlumno/:id',
    component: AlumnoFormComponent
  },
  {
    path:'asignaturas/alumno/:id',
    component: PreviewAlumnoComponent
  },
  {
    path:'asignaturas/:id',
    component: PreviewAsignaturaComponent
  },
  {
    path: '',
    redirectTo: '/asignaturas',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
