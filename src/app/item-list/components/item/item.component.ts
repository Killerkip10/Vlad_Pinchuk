import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

import {Node} from '../../models';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent {
  @Input() node: Node;
  @Output() select = new EventEmitter<Node>();

  constructor() {}

  public addItems(): void {
    if (this.node.children) {
      this.node.children = null;
    } else {
      this.select.emit(this.node);
    }
  }
  public onSelect(node): void {
    this.select.emit(node);
  }
}
