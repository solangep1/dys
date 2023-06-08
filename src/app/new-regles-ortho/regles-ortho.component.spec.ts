import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReglesOrthoComponent } from './regles-ortho.component';

describe('NewReglesOrthoComponent', () => {
  let component: NewReglesOrthoComponent;
  let fixture: ComponentFixture<NewReglesOrthoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReglesOrthoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewReglesOrthoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
