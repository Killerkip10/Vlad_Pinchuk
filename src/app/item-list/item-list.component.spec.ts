import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListComponent } from './item-list.component';
import {
  ItemComponent,
  PathComponent,
  SearchComponent
} from './components';
import {ItemService} from './services';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoreModule} from '../core/core.module';
import {AppTranslate} from '../app.translate';
import {TranslateModule} from '@ngx-translate/core';
import {Node} from './models';
import {FormsModule} from '@angular/forms';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;
  const nodes: Node[] = [
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
    {
      value: 'item 3',
      open: true,
      children: null
    },
    {
      value: 'item 4',
      open: false,
      children: null
    }
  ];
  const ItemServiceTest1 = {
    getItems: () => nodes
  };
  const ItemServiceTest2 = {
    getItems: () => [{...nodes[0], children: nodes}, ...nodes]
  };

  const modules = {
    imports: [
      CoreModule,
      CommonModule,
      FormsModule,
      TranslateModule,
      AppTranslate
    ],
    declarations: [
      ItemListComponent,
      PathComponent,
      SearchComponent,
      ItemComponent
    ],
    schemas: [
      NO_ERRORS_SCHEMA
    ]
  };

  it('should create', () => {
    TestBed.configureTestingModule({...modules, providers: [{provide: ItemService, useValue: ItemServiceTest1}]}).compileComponents();
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('snapshot', () => {
    TestBed.configureTestingModule({...modules, providers: [{provide: ItemService, useValue: ItemServiceTest1}]}).compileComponents();
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  it('snapshot', () => {
    TestBed.configureTestingModule({...modules, providers: [{provide: ItemService, useValue: ItemServiceTest2}]}).compileComponents();
    fixture = TestBed.createComponent(ItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(fixture).toMatchSnapshot();
  });

  // it('snapshot', () => {
  //   component.nodes = nodes;
  //   component.path = 'item 1 // item 2';
  //   fixture.detectChanges();
  //
  //   expect(fixture).toMatchSnapshot();
  // });

  // it('snapshot', () => {
  //   const deepNodes = [...nodes];
  //
  //   deepNodes[0].children = nodes;
  //   component.nodes = deepNodes;
  //   component.path = 'item 1';
  //   fixture.detectChanges();
  //
  //   expect(fixture).toMatchSnapshot();
  // });
});
