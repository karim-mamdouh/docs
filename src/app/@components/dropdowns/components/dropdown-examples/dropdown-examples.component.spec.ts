import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownExamplesComponent } from './dropdown-examples.component';

describe('DropdownExamplesComponent', () => {
  let component: DropdownExamplesComponent;
  let fixture: ComponentFixture<DropdownExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownExamplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
