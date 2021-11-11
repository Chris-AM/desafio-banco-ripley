import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { MESSAGES } from '../../constants/messages';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public home: string = '';
  public movements: string = '';
  public receipts: string = '';
  
  constructor() { }

  ngOnInit(): void {
    this.getMessages();
  }

  public getMessages() {
    this.home = _.get(MESSAGES, 'SIDE_BAR.HOME');
    this.movements = _.get(MESSAGES, 'SIDE_BAR.MOVEMENTS');
    this.receipts = _.get(MESSAGES, 'SIDE_BAR.RECEIPTS');
  }
}
