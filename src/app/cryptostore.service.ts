
import { Inject, Injectable, OnInit } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { Observable, of } from 'rxjs';
import { Cryptoasset } from './cryptos/cryptoasset';




@Injectable({
  providedIn: 'root'
})


export class CryptostoreService implements OnInit {

  STORAGE_KEY = 'local_cryptolist';

  cryptoList: Cryptoasset[] = [];

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
    let assetsList = [{"id": 10, "ticker": "BTC", "amount":0.5, "lastprice": 0, "total": 0},{"id": 18, "ticker": "XRP", "amount":2.5, "lastprice": 0, "total": 0}, {"id": 14, "ticker": "DASH", "amount":0.3, "lastprice": 0, "total": 0}]
    this.saveCryptoList(assetsList);
   }
  
  
   ngOnInit(): void {
  }



   findAll(): Observable<Cryptoasset[]> {
    this.cryptoList = this.readCryptoList();

    return of(this.cryptoList);
   }

   readCryptoList(): Cryptoasset[] {
     if(this.storage.has(this.STORAGE_KEY)) {
       return JSON.parse(this.storage.get(this.STORAGE_KEY));
     } else {
       return [];
     }
   }

   saveCryptoList(assets: Cryptoasset[]) {
     this.storage.set(this.STORAGE_KEY, JSON.stringify(assets));
   }

  add(crypto: Cryptoasset) {

  }

  remove(id: number) {

  }

  update(id: number, crypto: Cryptoasset) {
    
  }




}
