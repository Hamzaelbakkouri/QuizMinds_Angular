import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsChallengeComponent } from './questions-challenge.component';

describe('QuestionsChallengeComponent', () => {
  let component: QuestionsChallengeComponent;
  let fixture: ComponentFixture<QuestionsChallengeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionsChallengeComponent]
    });
    fixture = TestBed.createComponent(QuestionsChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
