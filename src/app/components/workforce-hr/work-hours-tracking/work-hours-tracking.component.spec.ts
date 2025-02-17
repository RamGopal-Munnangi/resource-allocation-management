import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHoursTrackingComponent } from './work-hours-tracking.component';

describe('WorkHoursTrackingComponent', () => {
  let component: WorkHoursTrackingComponent;
  let fixture: ComponentFixture<WorkHoursTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkHoursTrackingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkHoursTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
