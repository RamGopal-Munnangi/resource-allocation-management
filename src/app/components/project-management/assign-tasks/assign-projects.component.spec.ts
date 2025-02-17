import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignprojectComponent } from './assign-projects.component';

describe('AssignprojectComponent', () => {
  let component: AssignprojectComponent;
  let fixture: ComponentFixture<AssignprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignprojectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
