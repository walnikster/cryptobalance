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

    let assetsList = [{'id': 10, 'ticker': 'BTC', 'amount':0.5, 'lastprice': 0, 'total': 0},{'id': 18, 'ticker': 'XRP', 'amount':2.5, 'lastprice': 0, 'total': 0}, {'id': 14, 'ticker': 'DASH', 'amount':0.3, 'lastprice': 0, 'total': 0}]

    this.cryptoservice.saveCryptoList(assetsList);

    this.assets = this.cryptoservice.findAll();

  }





}
