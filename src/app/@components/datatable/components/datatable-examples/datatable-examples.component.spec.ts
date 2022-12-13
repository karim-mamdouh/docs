import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableExamplesComponent } from './datatable-examples.component';

describe('DatatableExamplesComponent', () => {
  let component: DatatableExamplesComponent;
  let fixture: ComponentFixture<DatatableExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatatableExamplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatatableExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
