import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificatinsComponent } from './notificatins.component';

describe('NotificatinsComponent', () => {
  let component: NotificatinsComponent;
  let fixture: ComponentFixture<NotificatinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificatinsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificatinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
