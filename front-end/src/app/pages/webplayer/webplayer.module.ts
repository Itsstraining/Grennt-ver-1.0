import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebplayerRoutingModule } from './webplayer-routing.module';
import { WebplayerComponent } from './webplayer.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { NbUserModule, NbCardModule, NbListModule, NbIconModule, NbTooltipModule, NbContextMenuModule, NbLayoutModule, NbSidebarModule, NbProgressBarModule, NbButtonModule } from '@nebular/theme';
import { TrackComponent } from './track/track.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';


@NgModule({
  declarations: [WebplayerComponent,TrackComponent, PlaylistComponent, UploadTaskComponent],
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
    NbSidebarModule
  ],
  exports: [
    TrackComponent
  ]
})
export class WebplayerModule { }
