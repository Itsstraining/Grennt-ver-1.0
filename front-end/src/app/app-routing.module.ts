import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule), },
  // { path: 'upload', loadChildren: () => import('./pages/upload/upload.module').then(m => m.UploadModule), canActivate: [AuthGuard] },
  // { path: 'library', loadChildren: () => import('./pages/library/library.module').then(m => m.LibraryModule), canActivate: [AuthGuard] },
  // { path: 'search', loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule) },
  // { path: 'playlist/:id', loadChildren: () => import('./pages/playlist/playlist.module').then(m => m.PlaylistModule), canActivate: [AuthGuard] },
  // { path: 'webPlayer:id', loadChildren: () => import('./pages/web-player/web-player.module').then(m => m.WebPlayerModule) },
  { path: 'homepage', loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule) },
  { path: 'webplayer', loadChildren: () => import('./pages/webplayer/webplayer.module').then(m => m.WebplayerModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
