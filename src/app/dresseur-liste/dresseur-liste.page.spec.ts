import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DresseurListePage } from './dresseur-liste.page';

describe('DresseurListePage', () => {
  let component: DresseurListePage;
  let fixture: ComponentFixture<DresseurListePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DresseurListePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DresseurListePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
