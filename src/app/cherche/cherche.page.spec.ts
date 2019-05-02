import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CherchePage } from './cherche.page';

describe('CherchePage', () => {
  let component: CherchePage;
  let fixture: ComponentFixture<CherchePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CherchePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CherchePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
