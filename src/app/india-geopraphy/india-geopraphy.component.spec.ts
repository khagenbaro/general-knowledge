import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiaGeopraphyComponent } from './india-geopraphy.component';

describe('IndiaGeopraphyComponent', () => {
  let component: IndiaGeopraphyComponent;
  let fixture: ComponentFixture<IndiaGeopraphyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndiaGeopraphyComponent]
    });
    fixture = TestBed.createComponent(IndiaGeopraphyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
