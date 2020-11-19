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
//assetsList = [{"id": 10, "ticker": "BTC", "amount":0.5, "lastprice": 0, "total": 0},{"id": 18, "ticker": "XRP", "amount":2.5, "lastprice": 0, "total": 0}, {"id": 14, "ticker": "DASH", "amount":0.3, "lastprice": 0, "total": 0}]
assetsList = [];



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
