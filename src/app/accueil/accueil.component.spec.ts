import { ComponentFixture, TestBed } from '@angular/core/testing';

import { accueilComponent } from './accueil.component';

describe('accueilComponent', () => {
  let component: accueilComponent;
  let fixture: ComponentFixture<accueilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [accueilComponent]
    });
    fixture = TestBed.createComponent(accueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});