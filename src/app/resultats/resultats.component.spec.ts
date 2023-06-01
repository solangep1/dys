import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatsComponent } from './resultats.component';
import { CommonModule } from '@angular/common';


describe('ResultatsComponent', () => {
  let component: ResultatsComponent;
  let fixture: ComponentFixture<ResultatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
