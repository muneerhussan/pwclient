import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPagaContentComponent } from './main-paga-content.component';

describe('MainPagaContentComponent', () => {
  let component: MainPagaContentComponent;
  let fixture: ComponentFixture<MainPagaContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPagaContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPagaContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
