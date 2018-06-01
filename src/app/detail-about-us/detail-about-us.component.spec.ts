import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAboutUsComponent } from './detail-about-us.component';

describe('DetailAboutUsComponent', () => {
  let component: DetailAboutUsComponent;
  let fixture: ComponentFixture<DetailAboutUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAboutUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
