import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ChangeDetectionStrategy, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';

import {ItemService} from './services';
import {CoreModule} from '../core/core.module';
import {AppTranslate} from '../app.translate';
import {Node} from './models';
import {ItemListComponent} from './item-list.component';

describe('ItemListComponent', () => {
  let component: ItemListComponent;
  let fixture: ComponentFixture<ItemListComponent>;

  interface ServiceTest {
    getItems: () => Node[];
  }
  class ItemServiceTest implements ServiceTest {
    getItems(): Node[] {
      return [
        {
          value: 'item 1',
          open: true,
          children: null
        },
        {
          value: 'item 2',
          open: true,
          children: null
        }
      ];
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        CommonModule,
        FormsModule,
        TranslateModule,

        AppTranslate
      ],
      declarations: [
        ItemListComponent
      ],
      providers: [
        {provide: ItemService, useClass: ItemServiceTest}
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
      .overrideComponent(ItemListComponent, {set: {changeDetection: ChangeDetectionStrategy.Default}})
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListComponent);
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
