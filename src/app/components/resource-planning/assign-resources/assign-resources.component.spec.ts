import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignResourcesComponent } from './assign-resources.component';

describe('AssignResourcesComponent', () => {
  let component: AssignResourcesComponent;
  let fixture: ComponentFixture<AssignResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignResourcesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
