import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebPlayerComponent } from './web-player.component';

const routes: Routes = [{ path: '', component: WebPlayerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebPlayerRoutingModule { }
