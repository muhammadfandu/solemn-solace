import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisasterManagementComponent } from './disaster-management.component';

describe('DisasterManagementComponent', () => {
  let component: DisasterManagementComponent;
  let fixture: ComponentFixture<DisasterManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisasterManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisasterManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
