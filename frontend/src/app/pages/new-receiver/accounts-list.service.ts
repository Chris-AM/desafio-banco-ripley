import { Injectable } from '@angular/core';
import { AccountList } from 'src/app/shared/interfaces/accountListInterface';

@Injectable({
  providedIn: 'root'
})
export class AccountsListService {

  private accounts: AccountList[] = [{
    accountName: 'Cuenta Vista/rut'
  },
  {
    accountName: 'Cuenta Corriente'
  },
  {
    accountName: 'Chequera Electrónica'
  },
  {
    accountName: 'Cuenta de Ahorros'
  },
];
  constructor() { }

  getAccounts() {
    return this.accounts;
  }
  getAccount(id: number) {
    return this.accounts[id];
  }
}
