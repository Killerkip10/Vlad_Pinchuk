import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material';

import {UserInfoComponent} from './user-info.component';

@NgModule({
  imports:[
    MatCardModule
  ],
  declarations:[
    UserInfoComponent
  ],
  exports:[
    UserInfoComponent
  ]
})
export class UserInfoModule{}
