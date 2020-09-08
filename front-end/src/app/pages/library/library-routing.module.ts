import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibraryComponent } from './library.component';
import { LikedSongComponent } from './liked-song/liked-song.component';

const routes: Routes = [
  { path: '', component: LibraryComponent },
  { path: 'liked-song', component: LikedSongComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibraryRoutingModule { }
