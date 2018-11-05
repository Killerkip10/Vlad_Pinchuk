import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {ItemService} from './services';
import {Node} from './models';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemListComponent implements OnInit {
  public nodes: Node[];
  public path: string;

  constructor(public itemService: ItemService) {}

  ngOnInit(): void {
    this.nodes = this.itemService.getItems();
  }

  public onSelect(node: Node): void {
    node.children = this.itemService.getItems();
    this.path = this.itemService.pathItem(this.nodes, node);
  }
  public onSearch(value: string): void {
    this.nodes = this.itemService.searchItem(this.nodes, value);
  }
}
