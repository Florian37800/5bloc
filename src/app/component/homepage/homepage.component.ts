import { Component } from '@angular/core';
import { SmartContractService } from '../../service/smart-contract/smart-contract.service';
import { Bytes } from 'web3';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {
  opened = false;
  rightSidenavOpened = false;
  accountAddress = "";
  accountBalance = "";
  accountCards: any[] = [];
  accountTickets: any[] = [];

  constructor(private smartContract: SmartContractService) {
    this.initMetamask();
  }

  async initMetamask() {
    await this.smartContract.connectToMetaMask();
    await this.smartContract.getAccounts().then(response => this.accountAddress = response[0]);
    this.smartContract.getBalance(this.accountAddress).then(response => this.accountBalance = response);
    this.getAccountCards();
    this.getAccountTickets();
  }
  
  async getAccountCards(){
    await this.smartContract.getAccountCards(this.accountAddress).then(response => this.accountCards = response);
  }

  async getAccountTickets(){
    await this.smartContract.getAccountTickets(this.accountAddress).then(reponse => this.accountTickets = reponse);
  }

  async useTicket(id: Bytes){
    await this.smartContract.useTicket(id, this.accountAddress);
    this.getAccountTickets();
  }

}
