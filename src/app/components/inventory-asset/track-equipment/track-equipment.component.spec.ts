import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackEquipmentComponent } from './track-equipment.component';

describe('TrackEquipmentComponent', () => {
  let component: TrackEquipmentComponent;
  let fixture: ComponentFixture<TrackEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackEquipmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
