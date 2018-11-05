import {Component, Input} from '@angular/core';

import {User} from '../../../models';

@Component({
  selector: 'app-user-dropdown-item',
  templateUrl: './user-dropdown-item.component.html',
  styleUrls: ['./user-dropdown-item.component.scss']
})
export class UserDropdownItemComponent {
  @Input() public user: User;

  constructor() { }
}
