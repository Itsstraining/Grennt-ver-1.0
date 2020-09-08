import { UploadComponent } from './../upload/upload.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebplayerComponent } from './webplayer.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  { path: '', component: WebplayerComponent },
  // { path: 'upload', loadChildren: () => import('../upload/upload.module').then(m => m.UploadModule), canActivate: [AuthGuard] },
  // { path: 'library', loadChildren: () => import('../library/library.module').then(m => m.LibraryModule), canActivate: [AuthGuard] },
  // { path: 'playlist/:id', loadChildren: () => import('../playlist/playlist.module').then(m => m.PlaylistModule), canActivate: [AuthGuard] },
  {
    path:'upload', component: UploadComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebplayerRoutingModule { }
