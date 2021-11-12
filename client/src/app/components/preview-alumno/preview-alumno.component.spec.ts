import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewAlumnoComponent } from './preview-alumno.component';

describe('PreviewAlumnoComponent', () => {
  let component: PreviewAlumnoComponent;
  let fixture: ComponentFixture<PreviewAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
