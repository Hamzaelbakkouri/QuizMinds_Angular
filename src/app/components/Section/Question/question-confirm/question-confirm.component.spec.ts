import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionConfirmComponent } from './question-confirm.component';

describe('QuestionConfirmComponent', () => {
  let component: QuestionConfirmComponent;
  let fixture: ComponentFixture<QuestionConfirmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionConfirmComponent]
    });
    fixture = TestBed.createComponent(QuestionConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
