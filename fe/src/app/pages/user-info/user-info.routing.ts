import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {UserInfoComponent} from './pages/user-info.component';

const routes: Routes = [
  {
    path: 'create-user',
    component: UserInfoComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ]
})
export class UserInfoRouting{}
