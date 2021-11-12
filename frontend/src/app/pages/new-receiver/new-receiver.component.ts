import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { MESSAGES } from 'src/app/shared/constants/messages';
@Component({
  selector: 'app-new-receiver',
  templateUrl: './new-receiver.component.html',
  styleUrls: ['./new-receiver.component.scss']
})
export class NewReceiverComponent implements OnInit {

  
  public title: string = '';
  public name: string = '';
  public mail: string = '';
  public bank: string = '';
  public type: string = '';
  public rut: string = '';
  public account: string = '';
  public phone: string = '';
  public accept: string = '';

  constructor() { }

  ngOnInit(): void {
    this.getMessages();
  }

  public getMessages() {
    this.title = _.get(MESSAGES, 'NEW_RECEIVER.TITLE');
    this.name = _.get(MESSAGES, 'NEW_RECEIVER.NAME');
    this.mail = _.get(MESSAGES, 'NEW_RECEIVER.MAIL');
    this.bank = _.get(MESSAGES, 'NEW_RECEIVER.BANK');
    this.type = _.get(MESSAGES, 'NEW_RECEIVER.TYPE');
    this.rut = _.get(MESSAGES, 'NEW_RECEIVER.RUT');
    this.account = _.get(MESSAGES, 'NEW_RECEIVER.ACCOUNT');
    this.phone = _.get(MESSAGES, 'NEW_RECEIVER.PHONE');
    this.accept = _.get(MESSAGES, 'NEW_RECEIVER.ACCEPT');
  }
  
}
