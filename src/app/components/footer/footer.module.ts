import {NgModule} from '@angular/core';

import {FooterComponent} from './footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  declarations: [
    FooterComponent
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule {}
