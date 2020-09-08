import { ComponentsModule } from 'src/app/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistComponent } from './playlist.component';
import { NbListModule, NbCardModule, NbIconModule, NbButtonModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { WebplayerModule } from '../webplayer/webplayer.module';


@NgModule({
  declarations: [PlaylistComponent],
  imports: [
    CommonModule,
    PlaylistRoutingModule,
    NbCardModule,
    NbListModule,
    NbButtonModule,
    NbIconModule,
    WebplayerModule,
    NbLayoutModule,
    ComponentsModule,
    NbSidebarModule
  ]
})
export class PlaylistModule { }
