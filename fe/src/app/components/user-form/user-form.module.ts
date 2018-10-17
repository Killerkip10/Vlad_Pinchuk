import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
} from '@angular/material';

import {UserFormComponent} from './user-form.component';

@NgModule({
  imports:[
    CommonModule,
    ReactiveFormsModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
  ],
  declarations:[
    UserFormComponent,
  ],
  exports:[
    UserFormComponent,
  ]
})
export class UserFormModule{}
