import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebplayerComponent } from './webplayer.component';

const routes: Routes = [{ path: '', component: WebplayerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebplayerRoutingModule { }
