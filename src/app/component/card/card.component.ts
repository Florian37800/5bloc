import { Component } from '@angular/core';
import { SmartContractService } from '../../service/smart-contract/smart-contract.service';
import { Bytes } from 'web3';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  opened = false;
  rightSidenavOpened = false;

  accountAddress = ""
  cardNameList: string[] = [];
  cardList = new Map<string, any[]>();

  constructor(private smartContract: SmartContractService) {
    this.initAccount();
    this.listMarketCard();
  }

  async initAccount(){
    await this.smartContract.getAccounts().then(resp => this.accountAddress = resp[0]);
  }

  async listMarketCard() {
    await this.smartContract.getCardName().then(resp => this.cardNameList = resp);
    this.cardNameList.forEach(name => {
      this.smartContract.listNewCards(name).then(resp => this.cardList.set(name, resp));
    });
  }

  async buyCard(secondHand: boolean, name: string, id: Bytes, ethValue: number) {
    await this.smartContract.buyCard(secondHand, name, id, this.accountAddress, ethValue);
  }
 
}