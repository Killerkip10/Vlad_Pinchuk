import {Component, Input} from '@angular/core';

import {User} from '../../../models';

@Component({
  selector: 'app-user-chosen',
  templateUrl: './user-chosen.component.html',
  styleUrls: ['./user-chosen.component.scss']
})
export class UserChosenComponent {
  @Input() user: User;

  constructor() { }
}
