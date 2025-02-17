import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceProcurementComponent } from './resource-procurement.component';

describe('ResourceProcurementComponent', () => {
  let component: ResourceProcurementComponent;
  let fixture: ComponentFixture<ResourceProcurementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourceProcurementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceProcurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
