import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDresseurPage } from './details-dresseur.page';

describe('DetailsDresseurPage', () => {
  let component: DetailsDresseurPage;
  let fixture: ComponentFixture<DetailsDresseurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsDresseurPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDresseurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
