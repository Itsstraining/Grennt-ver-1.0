import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule), },
  { path: 'upload', loadChildren: () => import('./pages/upload/upload.module').then(m => m.UploadModule), canActivate: [AuthGuard] },
  { path: 'library', loadChildren: () => import('./pages/library/library.module').then(m => m.LibraryModule), canActivate: [AuthGuard] },
  { path: 'search', loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule) },
  // tslint:disable-next-line:max-line-length
  { path: 'playlist/:id', loadChildren: () => import('./pages/playlist/playlist.module').then(m => m.PlaylistModule), canActivate: [AuthGuard] },
  { path: 'homepage', loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule) },
  { path: 'webPlayer', loadChildren: () => import('./pages/web-player/web-player.module').then(m => m.WebPlayerModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
