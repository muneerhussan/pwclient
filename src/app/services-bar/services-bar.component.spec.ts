import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesBarComponent } from './services-bar.component';

describe('ServicesBarComponent', () => {
  let component: ServicesBarComponent;
  let fixture: ComponentFixture<ServicesBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
