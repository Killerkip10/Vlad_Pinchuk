import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ChangeDetectionStrategy, NO_ERRORS_SCHEMA} from '@angular/core';

import { PathComponent } from './path.component';

describe('PathComponent', () => {
  let component: PathComponent;
  let fixture: ComponentFixture<PathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PathComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
      .overrideComponent(PathComponent, {set: {changeDetection: ChangeDetectionStrategy.Default}})
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('snapshot', () => {
    component.path = 'item1 // item 2 // item 3';
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });
});
