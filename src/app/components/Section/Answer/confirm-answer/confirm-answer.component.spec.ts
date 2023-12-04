import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmAnswerComponent } from './confirm-answer.component';

describe('ConfirmAnswerComponent', () => {
  let component: ConfirmAnswerComponent;
  let fixture: ComponentFixture<ConfirmAnswerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmAnswerComponent]
    });
    fixture = TestBed.createComponent(ConfirmAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
