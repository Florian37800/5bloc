import { Component } from '@angular/core';
import { SmartContractService } from '../../service/smart-contract/smart-contract.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  opened = false;
  rightSidenavOpened = false;

  accountAddress: string = "";
  ticketPrice: number = 0;
  discountPrice: number = 0;
  ticketList: string[] = [];

  constructor(private smartContract: SmartContractService){
    this.initTicket();
  }

  async initTicket(){
    await this.smartContract.getAccounts().then(resp => this.accountAddress = resp[0]);
    await this.smartContract.listTickets().then(resp => this.ticketList = resp);
    await this.smartContract.getTicketPrice().then(resp => this.ticketPrice = Number(resp));
    this.smartContract.getMaxDiscountRate(this.accountAddress).then(resp => this.discountPrice = this.ticketPrice - this.ticketPrice * (Number(resp) / 100));
  }

  async buyTicket(type: string){
    await this.smartContract.buyTicket(type, this.accountAddress, this.ticketPrice);
  }
}
