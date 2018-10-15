import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

import {UserFormComponent} from './user-form.component';

@NgModule({
  imports:[
    CommonModule,
    ReactiveFormsModule
  ],
  declarations:[
    UserFormComponent,
  ],
  exports:[
    UserFormComponent,
  ]
})
export class UserFormModule{}
