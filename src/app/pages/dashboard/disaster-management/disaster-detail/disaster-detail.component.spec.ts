import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisasterDetailComponent } from './disaster-detail.component';

describe('DisasterDetailComponent', () => {
  let component: DisasterDetailComponent;
  let fixture: ComponentFixture<DisasterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisasterDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisasterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
