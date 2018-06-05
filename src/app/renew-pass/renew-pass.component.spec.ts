import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenewPassComponent } from './renew-pass.component';

describe('RenewPassComponent', () => {
  let component: RenewPassComponent;
  let fixture: ComponentFixture<RenewPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenewPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenewPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
