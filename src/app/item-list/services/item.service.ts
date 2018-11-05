import {Injectable} from '@angular/core';

import {Node} from '../models';

@Injectable()
export class ItemService {
  constructor() {}

  public getItems(): Node[] {
    return Array.from({length: 1000}, (v, i) => ({value: `item ${i}`, open: true, children: null}));
  }
  public searchItem(nodes: Node[], value: string): Node[] {
    this.allOpenItems(nodes);

    if (value) {
      this.searchHelper(nodes, value);
    }

    return nodes;
  }
  public pathItem(nodes: Node[], node: Node): string {
    let path = '';

    for (const key in nodes) {
      if (nodes[key] === node) {
        return node.value;
      }
      if (nodes[key].children) {
        path = this.pathItem(nodes[key].children, node);
      }
      if (path) {
        return `${nodes[key].value} // ${path}`;
      }
    }
  }

  private searchHelper(nodes: Node[], value: string): boolean {
    let isValue = false;

    for (const key in nodes) {
      if (nodes[key].children) {
        if (this.searchHelper(nodes[key].children, value)) {
          isValue = true;
          continue;
        }
      }
      if (nodes[key].value !== value) {
        nodes[key] = Object.assign({}, nodes[key], {open: false});
      } else {
        isValue = true;
      }
    }

    return isValue;
  }
  private allOpenItems(nodes: Node[]): void {
    for (const key in nodes) {
      if (nodes[key].children) {
        this.allOpenItems(nodes[key].children);
      }

      nodes[key] = Object.assign({}, nodes[key], {open: true});
    }
  }
}
