import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewConditionsComponent } from './conditions.component';

describe('NewConditionsComponent', () => {
  let component: NewConditionsComponent;
  let fixture: ComponentFixture<NewConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewConditionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
