import { LikedSongComponent } from './library-grenny/liked-song/liked-song.component';
import { LibraryComponent } from './library-grenny/library/library.component';
import { SearchComponent } from './search/search.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { UploadComponent } from './upload-grenny/upload/upload.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebplayerComponent } from './webplayer.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  { path: '', component: WebplayerComponent },
  {path: 'upload', component: UploadComponent},
  {path: 'playlist/:id', component: PlaylistComponent},
  {path: 'search', component: SearchComponent},
  {path: 'library', component: LibraryComponent},
  { path: 'liked-song', component: LikedSongComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebplayerRoutingModule { }
