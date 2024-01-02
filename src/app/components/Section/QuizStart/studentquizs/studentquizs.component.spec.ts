import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentquizsComponent } from './studentquizs.component';

describe('StudentquizsComponent', () => {
  let component: StudentquizsComponent;
  let fixture: ComponentFixture<StudentquizsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentquizsComponent]
    });
    fixture = TestBed.createComponent(StudentquizsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
