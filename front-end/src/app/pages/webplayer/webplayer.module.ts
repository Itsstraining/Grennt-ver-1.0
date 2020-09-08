import { PlayerComponent } from './../../components/footer/player/player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebplayerRoutingModule } from './webplayer-routing.module';
import { WebplayerComponent } from './webplayer.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { NbUserModule, NbCardModule, NbListModule, NbIconModule, NbTooltipModule, NbContextMenuModule, NbLayoutModule, NbSidebarModule, NbProgressBarModule, NbButtonModule, NbTableModule, NbTabsetModule, NbRouteTabsetModule, NbInputModule } from '@nebular/theme';
import { TrackComponent } from './track/track.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { UploadTaskComponent } from './upload-grenny/upload-task/upload-task.component';
import { UpdateImageComponent } from './upload-grenny/update-image/update-image.component';
import { UploadMusicComponent } from './upload-grenny/upload-music/upload-music.component';
import { UploaderComponent } from './upload-grenny/uploader/uploader.component';
import { UploadComponent } from './upload-grenny/upload/upload.component';
import { LibraryComponent } from './library-grenny/library/library.component';
import { PlaylistDetailComponent} from './library-grenny/playlist-detail/playlist-detail.component'
import { LikedSongComponent} from './library-grenny/liked-song/liked-song.component';
import { SearchComponent } from './search/search.component'


@NgModule({
  declarations: [
    WebplayerComponent,
    TrackComponent,
    PlaylistComponent,
    UploadTaskComponent,
    UpdateImageComponent,
    UploadMusicComponent,
    UploaderComponent,
    UploadComponent,
    LibraryComponent,
    PlaylistDetailComponent,
    LikedSongComponent,
    SearchComponent
  ],
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
    NbProgressBarModule,
    NbButtonModule,
    NbCardModule,
    NbListModule,
    ComponentsModule,
    NbSidebarModule,
    ReactiveFormsModule,
    NbCardModule,
    NbTableModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbIconModule,
    NbListModule,
    ComponentsModule,
    NbInputModule
  ],
  exports: [
    TrackComponent,
    UpdateImageComponent,
    UploadComponent,
    UploadMusicComponent,
    UploadTaskComponent,
    UploaderComponent,
    PlaylistComponent,
    PlaylistDetailComponent,
    LikedSongComponent,
    LibraryComponent,
    SearchComponent
  ]
})
export class WebplayerModule { }
