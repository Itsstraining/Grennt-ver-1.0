import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { HomeModule } from '../home/home.module';
import { NbListModule, NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    NbCardModule,
    NbListModule,
    HomeModule
  ]
})
export class SearchModule { }
