import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelConfirmComponent } from './level-confirm.component';

describe('LevelConfirmComponent', () => {
  let component: LevelConfirmComponent;
  let fixture: ComponentFixture<LevelConfirmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LevelConfirmComponent]
    });
    fixture = TestBed.createComponent(LevelConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
