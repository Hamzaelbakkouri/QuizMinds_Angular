import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaPopComponent } from './media-pop.component';

describe('MediaPopComponent', () => {
  let component: MediaPopComponent;
  let fixture: ComponentFixture<MediaPopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaPopComponent]
    });
    fixture = TestBed.createComponent(MediaPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
