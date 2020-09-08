import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { NbCardModule, NbListModule } from '@nebular/theme';


@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    NbCardModule,
    NbListModule,
  ]
})
export class SearchModule { }
