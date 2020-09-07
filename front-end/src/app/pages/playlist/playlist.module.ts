import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistComponent } from './playlist.component';
import { NbListModule, NbCardModule, NbIconModule, NbButtonModule } from '@nebular/theme';
import { WebPlayerModule } from '../web-player/web-player.module';


@NgModule({
  declarations: [PlaylistComponent],
  imports: [
    CommonModule,
    PlaylistRoutingModule,
    NbCardModule,
    NbListModule,
    NbButtonModule,
    NbIconModule,
    WebPlayerModule
  ]
})
export class PlaylistModule { }
