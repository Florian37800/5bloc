import { Component } from '@angular/core';
import { SmartContractService } from '../../service/smart-contract/smart-contract.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  private contractAddress: string;
  private contractABI: any;
  constructor(private smartContractService: SmartContractService) {
    this.contractAddress = smartContractService.getContractAddress();
    this.contractABI = smartContractService.getContractABI();
   }

  opened = false;
  rightSidenavOpened = false;
  cards = [
    { title: 'Card 1', subtitle: 'Subtitle 1', description: 'Description of Card 1', image: 'https://via.placeholder.com/150' },
    { title: 'Card 2', subtitle: 'Subtitle 2', description: 'Description of Card 2', image: 'https://via.placeholder.com/150' },
    { title: 'Card 3', subtitle: 'Subtitle 3', description: 'Description of Card 3', image: 'https://via.placeholder.com/150' },
    { title: 'Card 4', subtitle: 'Subtitle 4', description: 'Description of Card 4', image: 'https://via.placeholder.com/150' },
  ]
 
}