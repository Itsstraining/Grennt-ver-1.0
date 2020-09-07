import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { NbCardModule, NbListModule } from '@nebular/theme';
import { WebplayerModule } from '../webplayer/webplayer.module';


@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    NbCardModule,
    NbListModule,
    WebplayerModule
  ]
})
export class SearchModule { }
