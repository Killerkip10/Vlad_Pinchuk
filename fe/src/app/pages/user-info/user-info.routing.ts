import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {UserInfoComponent} from './pages/user-info.component';

const routes: Routes = [
  {
    path: 'user-info',
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
