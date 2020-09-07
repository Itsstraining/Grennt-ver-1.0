import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    ComponentsModule
  ]
})
export class HomepageModule { }
