import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ChangeDetectionStrategy, NO_ERRORS_SCHEMA} from '@angular/core';

import {SearchComponent} from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
      .overrideComponent(SearchComponent, {set: {changeDetection: ChangeDetectionStrategy.Default}})
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });
});
