import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstinassamComponent } from './firstinassam.component';

describe('FirstinassamComponent', () => {
  let component: FirstinassamComponent;
  let fixture: ComponentFixture<FirstinassamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstinassamComponent]
    });
    fixture = TestBed.createComponent(FirstinassamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
