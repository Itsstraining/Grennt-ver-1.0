import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadRoutingModule } from './upload-routing.module';
import { UploadComponent } from './upload.component';
import { UploaderComponent } from './uploader/uploader.component';
import { UpdateImageComponent } from './uploader/update-image/update-image.component';
import { UploadMusicComponent } from './uploader/upload-music/upload-music.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { NbProgressBarModule, NbCardModule, NbButtonModule, NbInputModule, NbListModule } from '@nebular/theme';
import { AngularFireStorageModule } from '@angular/fire/storage';
@NgModule({
  declarations: [UploadComponent, UploaderComponent, UpdateImageComponent, UploadMusicComponent, UploadTaskComponent],
  imports: [
    CommonModule,
    UploadRoutingModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    UploadRoutingModule,
    NbProgressBarModule,
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbListModule
  ]
})
export class UploadModule { }
