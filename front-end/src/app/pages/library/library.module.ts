import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library.component';
import {
  NbCardModule,
  NbTableModule,
  NbTabsetModule,
  NbRouteTabsetModule,
  NbIconModule,
  NbListModule,
  NbButtonModule
} from '@nebular/theme';
import { PlaylistDetailComponent } from './playlist-detail/playlist-detail.component';
import { LikedSongComponent } from './liked-song/liked-song.component';
import { WebPlayerModule } from '../web-player/web-player.module';


@NgModule({
  declarations: [
    LibraryComponent,
    PlaylistDetailComponent,
    LikedSongComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    NbCardModule,
    NbTableModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbIconModule,
    WebPlayerModule,
    NbListModule,
    NbButtonModule
  ]
})
export class LibraryModule { }
