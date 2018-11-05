import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PathComponent {
  @Input() public path: string;

  constructor() { }
}
