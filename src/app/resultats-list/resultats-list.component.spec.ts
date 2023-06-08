import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatsListComponent } from './resultats-list.component';

describe('ResultatsListComponent', () => {
  let component: ResultatsListComponent;
  let fixture: ComponentFixture<ResultatsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultatsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultatsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
