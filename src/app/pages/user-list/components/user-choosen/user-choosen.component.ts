import {Component, Input} from '@angular/core';

import {ShortUser} from '../../../../../../server/models';

@Component({
  selector: 'app-user-choosen',
  templateUrl: './user-choosen.component.html',
  styleUrls: ['./user-choosen.component.scss']
})
export class UserChoosenComponent {
  @Input() user: ShortUser;

  constructor() { }
}
