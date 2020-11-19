import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CryptostoreService } from '../cryptostore.service';
import { Cryptoasset } from './cryptoasset';

@Component({
  selector: 'app-cryptos',
  templateUrl: './cryptos.component.html',
  styleUrls: ['./cryptos.component.css']
})
export class CryptosComponent implements OnInit {


assets: Observable<Cryptoasset[]>

  constructor( private cryptoservice: CryptostoreService ) { }


  ngOnInit(): void {
    // this.cryptoservice.saveCryptoList(this.assetsList);
    this.assets = this.cryptoservice.findAll();
  }


  reload(): void {
    //this.assetsList[1].amount=this.assetsList[1].amount+2;
    this.assets = this.cryptoservice.saveAndReload(this.assetsList);
  }

  
}
