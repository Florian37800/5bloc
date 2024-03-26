import { Component } from '@angular/core';
import { SmartContractService } from '../../service/smart-contract/smart-contract.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrl: './administrator.component.css'
})
export class AdministratorComponent {
  opened = false;
  rightSidenavOpened = false;

  accountAddress: string = "";
  newCard = new FormControl("");

  constructor(private smartContract: SmartContractService, private router: Router){
    this.initAccount();
  }

  async initAccount(){
    await this.smartContract.getAccounts().then(resp => this.accountAddress = resp[0]);
    this.smartContract.getDeployer().then(resp => {
      if(resp.toUpperCase() != this.accountAddress.toUpperCase()){
        alert("You are not an administrator, you cannot access this page.");
        this.router.navigate(['/homepage']);
      }
    });
  }

  async createCard(name: string, price: number, image: string, description: string, discountRate: number) {
    await this.smartContract.createCard(name, price, image, description, discountRate, this.accountAddress).then();
  }

}
