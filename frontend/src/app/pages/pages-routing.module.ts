import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EditReceiverComponent } from "./edit-receiver/edit-receiver.component";
import { HistoryComponent } from "./history/history.component";
import { NewReceiverComponent } from "./new-receiver/new-receiver.component";
import { PagesComponent } from "./pages.component";
import { ReceiptsComponent } from "./receipts/receipts.component";
import { TransferenceComponent } from "./transference/transference.component";

const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent, data: { title: 'Dashboard' } },
            { path: 'historial', component: HistoryComponent, data: { title: 'History' } },
            { path: 'nuevo-destinatario', component: NewReceiverComponent, data: { title: 'New Receiver' } },
            { path: 'nueva-transferencia', component: TransferenceComponent, data: { title: 'New Transference' } },
            { path: 'destinatarios', component: ReceiptsComponent, data: { title: 'Receivers' } },
            { path: 'editar-destinatario/:_id', component: EditReceiverComponent, data: { title: 'Edit Receiver' } },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class PagesRoutingModule { }