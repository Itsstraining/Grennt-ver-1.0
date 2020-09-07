import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebPlayerRoutingModule } from './web-player-routing.module';
import { WebPlayerComponent } from './web-player.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [WebPlayerComponent],
  imports: [
    CommonModule,
    WebPlayerRoutingModule,
    ComponentsModule
  ]
})
export class WebPlayerModule { }
