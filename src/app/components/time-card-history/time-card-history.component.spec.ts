import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeCardHistoryComponent } from './time-card-history.component';

describe('TimeCardHistoryComponent', () => {
  let component: TimeCardHistoryComponent;
  let fixture: ComponentFixture<TimeCardHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeCardHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeCardHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
