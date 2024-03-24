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
  ticketList: string[] = [];

  constructor(private smartContract: SmartContractService){
    this.initTicket();
  }

  async initTicket(){
    await this.smartContract.getAccounts().then(resp => this.accountAddress = resp[0]);
    await this.smartContract.listTickets().then(resp => this.ticketList = resp);
    await this.smartContract.getTicketPrice().then(resp => this.ticketPrice = resp);
  }

  async buyTicket(type: string){
    const isConfirmed = confirm("Confirmez-vous l'achat de ce ticket ?");

    if (isConfirmed) {
      try {
        await this.smartContract.buyTicket(type, this.accountAddress, this.ticketPrice);
        
        alert("L'achat du ticket est validé !");
      } catch (error) {
        console.error("Erreur lors de la transaction : ", error);
      }
    } else {
      console.log('Transaction annulée');
    }
  }
}
