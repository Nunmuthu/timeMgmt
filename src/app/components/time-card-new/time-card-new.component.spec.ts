import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeCardNewComponent } from './time-card-new.component';

describe('TimeCardNewComponent', () => {
  let component: TimeCardNewComponent;
  let fixture: ComponentFixture<TimeCardNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeCardNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeCardNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
