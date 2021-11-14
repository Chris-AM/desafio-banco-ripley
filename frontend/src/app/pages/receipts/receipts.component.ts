import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { MESSAGES } from 'src/app/shared/constants/messages';
import { UnsubscribeHelper } from 'src/app/shared/unsubscribe.helper';
import { ReceiptsService } from '../../services/receipts.service';

@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.scss']
})
export class ReceiptsComponent extends UnsubscribeHelper implements OnInit {


  //messages
  public title: string = '';
  public name: string = '';
  public mail: string = '';
  public bank: string = '';
  public type: string = '';
  public rut: string = '';
  public account: string = '';
  public phone: string = '';

  public receiptList: any[] = [];
  constructor( private _receiptsService: ReceiptsService ) { super(); }

  ngOnInit(): void {
    this.getMessages();
    this.getReceipts();
  }

  public getReceipts() {
    this._receiptsService.getReceipts().subscribe(
      (data: any) => {
        console.log('data -->', data);
        this.receiptList = data.receivers;
        console.log('this.receiptList -->', this.receiptList);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  public getMessages() {
    this.title = _.get(MESSAGES, 'RECEIVER.RECEIVERS');
    this.name = _.get(MESSAGES, 'RECEIVER.NAME');
    this.mail = _.get(MESSAGES, 'RECEIVER.MAIL');
    this.bank = _.get(MESSAGES, 'RECEIVER.BANK');
    this.type = _.get(MESSAGES, 'RECEIVER.TYPE');
    this.rut = _.get(MESSAGES, 'RECEIVER.RUT');
    this.account = _.get(MESSAGES, 'RECEIVER.ACCOUNT');
    this.phone = _.get(MESSAGES, 'RECEIVER.PHONE');
  }

  deleteReceipt(id: string) {
    console.log('id -->', id);
   this._receiptsService.deleteReceipt(id).subscribe(
      (data: any) => {
        console.log('data -->', data);
        this.getReceipts();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
