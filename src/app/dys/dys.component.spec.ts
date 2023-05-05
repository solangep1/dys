import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DysComponent } from './dys.component';

describe('DysComponent', () => {
  let component: DysComponent;
  let fixture: ComponentFixture<DysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DysComponent]
    });
    fixture = TestBed.createComponent(DysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
