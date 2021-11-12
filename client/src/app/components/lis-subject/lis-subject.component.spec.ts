import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisSubjectComponent } from './lis-subject.component';

describe('LisSubjectComponent', () => {
  let component: LisSubjectComponent;
  let fixture: ComponentFixture<LisSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LisSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LisSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
