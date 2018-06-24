import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GigListViewComponent } from './gig-list-view.component';

describe('GigListViewComponent', () => {
  let component: GigListViewComponent;
  let fixture: ComponentFixture<GigListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GigListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GigListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
