import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewAsignaturaComponent } from './preview-asignatura.component';

describe('PreviewAsignaturaComponent', () => {
  let component: PreviewAsignaturaComponent;
  let fixture: ComponentFixture<PreviewAsignaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewAsignaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
