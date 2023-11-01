import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsManagementComponent } from './logistics-management.component';

describe('LogisticsManagementComponent', () => {
  let component: LogisticsManagementComponent;
  let fixture: ComponentFixture<LogisticsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticsManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogisticsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
