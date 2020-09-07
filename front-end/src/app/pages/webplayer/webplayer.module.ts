import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebplayerRoutingModule } from './webplayer-routing.module';
import { WebplayerComponent } from './webplayer.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { NbUserModule, NbCardModule, NbListModule, NbIconModule, NbTooltipModule, NbContextMenuModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { TrackComponent } from './track/track.component';


@NgModule({
  declarations: [WebplayerComponent,TrackComponent],
  imports: [
    CommonModule,
    WebplayerRoutingModule,
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
export class WebplayerModule { }
