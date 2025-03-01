import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuestrackerComponent } from './issuestracker.component';

describe('IssuestrackerComponent', () => {
  let component: IssuestrackerComponent;
  let fixture: ComponentFixture<IssuestrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IssuestrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssuestrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
