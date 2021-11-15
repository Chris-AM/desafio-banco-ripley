import { LOCALE_ID, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
//pipes
import { FilterPipe } from '../pipes/filter.pipe';
//locale
import { registerLocaleData } from '@angular/common';
import localeCl from '@angular/common/locales/es-CL';

registerLocaleData(localeCl, 'es-CL');

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
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [
    DashboardComponent,
    NewReceiverComponent,
    TransferenceComponent,
    HistoryComponent,
    PagesComponent,
    ReceiptsComponent,
    LinksComponent,
    EditReceiverComponent,
    FilterPipe,
  ],
  exports: [
    DashboardComponent,
    NewReceiverComponent,
    TransferenceComponent,
    HistoryComponent,
    PagesComponent,
    ReceiptsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-CL' }],
})
export class PagesModule {}
