import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceHdoListComponent } from './exercice-hdo-list.component';

describe('ExerciceHdoListComponent', () => {
  let component: ExerciceHdoListComponent;
  let fixture: ComponentFixture<ExerciceHdoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciceHdoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciceHdoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
