import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllchallengeComponent } from './allchallenge.component';

describe('AllchallengeComponent', () => {
  let component: AllchallengeComponent;
  let fixture: ComponentFixture<AllchallengeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllchallengeComponent]
    });
    fixture = TestBed.createComponent(AllchallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
