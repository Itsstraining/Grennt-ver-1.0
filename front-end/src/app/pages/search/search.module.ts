import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { NbCardModule, NbListModule } from '@nebular/theme';
import { WebPlayerModule } from '../web-player/web-player.module';


@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    NbCardModule,
    NbListModule,
    WebPlayerModule
  ]
})
export class SearchModule { }
