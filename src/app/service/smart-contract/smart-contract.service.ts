import { Injectable } from '@angular/core';
import { Web3 } from 'web3';

declare let window: any;

@Injectable({
  providedIn: 'root'
})
export class SmartContractService {

  private abi = `[
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "ticketId",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "buyer",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "discountRate",
          "type": "uint256"
        }
      ],
      "name": "TicketPurchased",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "bool",
          "name": "_new",
          "type": "bool"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "bytes32",
          "name": "_id",
          "type": "bytes32"
        }
      ],
      "name": "buyCard",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_type",
          "type": "string"
        }
      ],
      "name": "buyTicket",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_price",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_image",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_description",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_discountRate",
          "type": "uint256"
        }
      ],
      "name": "createCard",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_id",
          "type": "bytes32"
        }
      ],
      "name": "sellCard",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_ticketId",
          "type": "bytes32"
        }
      ],
      "name": "useTicket",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "getCardName",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getCards",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "id",
              "type": "bytes32"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "image",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "discountRate",
              "type": "uint256"
            }
          ],
          "internalType": "struct PrivilegeCard.Card[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getMaxDiscountRate",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTickets",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "id",
              "type": "bytes32"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            }
          ],
          "internalType": "struct PrivilegeCard.Ticket[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "listMarketCard",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "id",
              "type": "bytes32"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "image",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "discountRate",
              "type": "uint256"
            }
          ],
          "internalType": "struct PrivilegeCard.Card[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "listNewCards",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bytes32",
              "name": "id",
              "type": "bytes32"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "image",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "discountRate",
              "type": "uint256"
            }
          ],
          "internalType": "struct PrivilegeCard.Card[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "listTickets",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "ticketPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]`

  private address = '0x1f15f58D3a1C1ec5cc926a055a7Db4F30318931f';
  private contract: any;
  web3: any;

  constructor() {
    if (window.ethereum) {
      this.web3 = new Web3(window.ethereum);
      this.contract = new this.web3.eth.Contract(JSON.parse(this.abi), this.address);
    }
  }


  getContractAddress(): string {
    return this.address;
  }

  getContractABI(): any {
      return this.contract;
  }

  async connectToMetaMask(): Promise<void> {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log('Connected to MetaMask');
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      console.error('MetaMask not detected');
    }
  }

  async getAccounts(): Promise<string[]> {
    if (window.ethereum) {
      try {
        return await window.ethereum.request({ method: 'eth_accounts' });
      } catch (error) {
        console.error('Error getting accounts:', error);
        return [];
      }
    } else {
      console.error('MetaMask not detected');
      return [];
    }
  }

  async getBalance(address: string): Promise<string> {
    if (window.ethereum) {
      try {
        const balance = await window.ethereum.request({
          method: 'eth_getBalance',
          params: [address, 'latest'],
        });
        return this.web3.utils.fromWei(balance, 'ether');
      } catch (error) {
        console.error('Error getting balance:', error);
        return '0';
      }
    } else {
      console.error('MetaMask not detected');
      return '0';
    }
  }

  async getAccountCards(address: string): Promise<any> {
    return this.contract.methods.getCards().call({from: address});
  }

  async getAccountTickets(address: string): Promise<any> {
    return this.contract.methods.getTickets().call({from: address});
  }

  async getCardName(): Promise<any> {
    return this.contract.methods.getCardName().call();
  }

  async listNewCards(name: string): Promise<any> {
    return this.contract.methods.listNewCards(name).call();
  }

  async sendTransaction(txObject: any): Promise<string> {
    if (window.ethereum) {
      try {
        const accounts = await this.getAccounts();
        if (!accounts || accounts.length === 0) {
          throw new Error('No accounts found');
        }
        const from = accounts[0];
        const transactionHash = await window.ethereum.request({
          method: 'eth_sendTransaction',
          params: [{ ...txObject, from }],
        });
        return transactionHash;
      } catch (error) {
        console.error('Error sending transaction:', error);
        return '';
      }
    } else {
      console.error('MetaMask not detected');
      return '';
    }
  }

  getCurentChampion(): Promise<any> {
    return this.contract.methods.getChampion().call();
  }
}
