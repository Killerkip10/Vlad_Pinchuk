import {NgModule} from "@angular/core";
import {MatCardModule} from '@angular/material';

import {UserInfoCardComponent} from './user-info-card.component';

@NgModule({
  imports:[
    MatCardModule
  ],
  declarations:[
    UserInfoCardComponent
  ],
  exports:[
    UserInfoCardComponent
  ]
})
export class UserInfoCardModule{}
