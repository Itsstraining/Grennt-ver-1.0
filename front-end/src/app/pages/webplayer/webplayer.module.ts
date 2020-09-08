import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebplayerRoutingModule } from './webplayer-routing.module';
import { WebplayerComponent } from './webplayer.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { NbUserModule, NbCardModule, NbListModule, NbIconModule, NbTooltipModule, NbContextMenuModule, NbLayoutModule, NbSidebarModule, NbProgressBarModule, NbButtonModule } from '@nebular/theme';
import { TrackComponent } from './track/track.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { UploadTaskComponent } from './upload-grenny/upload-task/upload-task.component';
import { UpdateImageComponent } from './upload-grenny/update-image/update-image.component';
import { UploadMusicComponent } from './upload-grenny/upload-music/upload-music.component';
import { UploaderComponent } from './upload-grenny/uploader/uploader.component';
import { UploadComponent } from './upload-grenny/upload/upload.component';


@NgModule({
  declarations: [WebplayerComponent,TrackComponent, PlaylistComponent, UploadTaskComponent, UpdateImageComponent, UploadMusicComponent, UploaderComponent, UploadComponent],
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
    NbListModule,
    WebplayerModule,
    NbLayoutModule,
    ComponentsModule,
    NbSidebarModule,
    ReactiveFormsModule,
  ],
  exports: [
    TrackComponent
  ]
})
export class WebplayerModule { }
