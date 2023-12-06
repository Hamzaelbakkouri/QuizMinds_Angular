import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizConfirmComponent } from './quiz-confirm.component';

describe('QuizConfirmComponent', () => {
  let component: QuizConfirmComponent;
  let fixture: ComponentFixture<QuizConfirmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizConfirmComponent]
    });
    fixture = TestBed.createComponent(QuizConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
