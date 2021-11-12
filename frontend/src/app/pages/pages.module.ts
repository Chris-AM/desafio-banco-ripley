import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewReceiverComponent } from './new-receiver/new-receiver.component';
import { TransferenceComponent } from './transference/transference.component';
import { HistoryComponent } from './history/history.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
import { ReceiptsComponent } from './receipts/receipts.component';
import { LinksComponent } from './links/links.component';
import { LinksService } from './links/links.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  declarations: [
    DashboardComponent,
    NewReceiverComponent,
    TransferenceComponent,
    HistoryComponent,
    PagesComponent,
    ReceiptsComponent,
    LinksComponent
  ],
  exports: [
    DashboardComponent,
    NewReceiverComponent,
    TransferenceComponent,
    HistoryComponent,
    PagesComponent,
    ReceiptsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [
    LinksService
  ]
})
export class PagesModule { }
