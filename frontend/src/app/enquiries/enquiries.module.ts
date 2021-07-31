import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnquiriesPageRoutingModule } from './enquiries-routing.module';

import { EnquiriesPage } from './enquiries.page';
import { EnquiriesListComponent } from './enquiries-list/enquiries-list.component';
import { EnquiriesDetailComponent } from './enquiries-detail/enquiries-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnquiriesPageRoutingModule
  ],
  declarations: [
    EnquiriesPage,
    EnquiriesListComponent,
    EnquiriesDetailComponent
  ]
})
export class EnquiriesPageModule { }