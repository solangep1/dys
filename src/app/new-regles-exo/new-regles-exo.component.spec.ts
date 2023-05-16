import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReglesExoComponent } from './new-regles-exo.component';

describe('NewReglesExoComponent', () => {
  let component: NewReglesExoComponent;
  let fixture: ComponentFixture<NewReglesExoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReglesExoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewReglesExoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
