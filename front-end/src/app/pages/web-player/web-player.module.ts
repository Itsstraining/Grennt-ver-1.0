import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebPlayerRoutingModule } from './web-player-routing.module';
import { WebPlayerComponent } from './web-player.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { NbLayoutModule, NbCardModule, NbUserModule, NbListModule, NbIconModule, NbTooltipModule, NbContextMenuModule, NbSidebarModule } from '@nebular/theme';
import { TrackComponent } from './track/track.component';


@NgModule({
  declarations: [WebPlayerComponent,TrackComponent],
  imports: [
    CommonModule,
    WebPlayerRoutingModule,
    ComponentsModule,
    NbCardModule,
    NbUserModule,
    NbListModule,
    NbIconModule,
    NbTooltipModule,
    NbContextMenuModule,
    NbLayoutModule,
    NbSidebarModule,
  ],
  exports: [
    TrackComponent
  ]
})
export class WebPlayerModule { }
