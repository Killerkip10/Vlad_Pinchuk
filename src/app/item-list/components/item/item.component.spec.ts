import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ChangeDetectionStrategy, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ItemComponent} from './item.component';
import {Node} from '../../models';
import {CoreModule} from '../../../core/core.module';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        CommonModule
      ],
      declarations: [
        ItemComponent
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
      .overrideComponent(ItemComponent, {set: {changeDetection: ChangeDetectionStrategy.Default}})
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
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
    component.node = {} as Node;
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('snapshot', () => {
    component.node = {
      value: 'item 1',
      open: true,
      children: null
    } as Node;
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('snapshot', () => {
    component.node = {
      value: 'item 1',
      open: false,
      children: null
    } as Node;
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('snapshot', () => {
    component.node = {
      value: 'item 1',
      open: true,
      children: [
        {
          value: 'item 1',
          open: true,
          children: null
        },
        {
          value: 'item 2',
          open: true,
          children: null
        },
      ]
    } as Node;
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });
});
