import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LisSubjectComponent } from './components/lis-subject/lis-subject.component';
import { AlumnoFormComponent } from './components/alumno-form/alumno-form.component';
import { PreviewAsignaturaComponent } from './components/preview-asignatura/preview-asignatura.component';
import { PreviewAlumnoComponent } from './components/preview-alumno/preview-alumno.component';
import { NavigationComponent } from './components/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    LisSubjectComponent,
    AlumnoFormComponent,
    PreviewAsignaturaComponent,
    PreviewAlumnoComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
