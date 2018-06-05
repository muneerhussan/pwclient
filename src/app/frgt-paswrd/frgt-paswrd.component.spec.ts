import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrgtPaswrdComponent } from './frgt-paswrd.component';

describe('FrgtPaswrdComponent', () => {
  let component: FrgtPaswrdComponent;
  let fixture: ComponentFixture<FrgtPaswrdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrgtPaswrdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrgtPaswrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
