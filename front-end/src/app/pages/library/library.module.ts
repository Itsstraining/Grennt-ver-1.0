import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { LibraryComponent } from './library.component';
import { PlaylistDetailComponent } from './playlist-detail/playlist-detail.component';
import { LikedSongComponent } from './liked-song/liked-song.component';
import { NbCardModule, NbTableModule, NbRouteTabsetModule, NbIconModule, NbListModule, NbButtonModule, NbTabsetModule } from '@nebular/theme';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [LibraryComponent, PlaylistDetailComponent, LikedSongComponent],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    NbCardModule,
    NbTableModule,
    NbRouteTabsetModule,
    NbIconModule,
    HomeModule,
    NbListModule,
    NbButtonModule,
    NbTabsetModule,
  ]
})
export class LibraryModule { }
