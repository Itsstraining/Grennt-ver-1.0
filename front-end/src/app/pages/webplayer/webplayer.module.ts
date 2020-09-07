import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebplayerRoutingModule } from './webplayer-routing.module';
import { WebplayerComponent } from './webplayer.component';


@NgModule({
  declarations: [WebplayerComponent],
  imports: [
    CommonModule,
    WebplayerRoutingModule
  ]
})
export class WebplayerModule { }
