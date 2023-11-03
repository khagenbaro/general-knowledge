import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssamGeopraphyComponent } from './assam-geopraphy.component';

describe('AssamGeopraphyComponent', () => {
  let component: AssamGeopraphyComponent;
  let fixture: ComponentFixture<AssamGeopraphyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssamGeopraphyComponent]
    });
    fixture = TestBed.createComponent(AssamGeopraphyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
