import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstInIndiaComponent } from './first-in-india.component';

describe('FirstInIndiaComponent', () => {
  let component: FirstInIndiaComponent;
  let fixture: ComponentFixture<FirstInIndiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirstInIndiaComponent]
    });
    fixture = TestBed.createComponent(FirstInIndiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
