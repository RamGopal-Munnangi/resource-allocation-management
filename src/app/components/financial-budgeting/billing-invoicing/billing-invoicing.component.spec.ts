import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingInvoicingComponent } from './billing-invoicing.component';

describe('BillingInvoicingComponent', () => {
  let component: BillingInvoicingComponent;
  let fixture: ComponentFixture<BillingInvoicingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillingInvoicingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillingInvoicingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
