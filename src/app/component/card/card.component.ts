import { Component } from '@angular/core';
import { SmartContractService } from '../../service/smart-contract/smart-contract.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  opened = false;
  rightSidenavOpened = false;

  cardNameList: string[] = [];
  cardList = new Map<string, any[]>();

  constructor(private smartContract: SmartContractService) {
    this.listMarketCard()
  }

  async listMarketCard() {
    await this.smartContract.getCardName().then(resp => this.cardNameList = resp);
    this.cardNameList.forEach(name => {
      this.smartContract.listNewCards(name).then(resp => this.cardList.set(name, resp));
    });
  }

  cards = [
    { title: 'Card 1', subtitle: 'Subtitle 1', description: 'Description of Card 1', image: 'https://via.placeholder.com/150' },
    { title: 'Card 2', subtitle: 'Subtitle 2', description: 'Description of Card 2', image: 'https://via.placeholder.com/150' },
    { title: 'Card 3', subtitle: 'Subtitle 3', description: 'Description of Card 3', image: 'https://via.placeholder.com/150' },
    { title: 'Card 4', subtitle: 'Subtitle 4', description: 'Description of Card 4', image: 'https://via.placeholder.com/150' },
  ]
 
}