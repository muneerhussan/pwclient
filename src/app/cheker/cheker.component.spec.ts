import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChekerComponent } from './cheker.component';

describe('ChekerComponent', () => {
  let component: ChekerComponent;
  let fixture: ComponentFixture<ChekerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChekerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
