import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/create-user',
    pathMatch:'full'
  },
  {
    path: '**',
    redirectTo: '/create-user'
  }
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ]
})
export class AppRouting{}
