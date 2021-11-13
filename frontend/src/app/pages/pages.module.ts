import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from '../shared/shared.module';

//components
import { LinksComponent } from './links/links.component';
import { PagesComponent } from './pages.component';
import { HistoryComponent } from './history/history.component';
import { TransferenceComponent } from './transference/transference.component';
import { NewReceiverComponent } from './new-receiver/new-receiver.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReceiptsComponent } from './receipts/receipts.component';
import { EditReceiverComponent } from './edit-receiver/edit-receiver.component';
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
    LinksComponent,
    EditReceiverComponent
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
    HttpClientModule
  ],
  providers: [
  ]
})
export class PagesModule { }
