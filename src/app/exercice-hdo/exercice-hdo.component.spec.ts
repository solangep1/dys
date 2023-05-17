import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceHDOComponent } from './exercice-hdo.component';

describe('ExerciceHDOComponent', () => {
  let component: ExerciceHDOComponent;
  let fixture: ComponentFixture<ExerciceHDOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciceHDOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciceHDOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
