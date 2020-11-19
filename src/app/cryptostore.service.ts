
import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { from, Observable, of } from 'rxjs';
import { Cryptoasset } from './cryptos/cryptoasset';




@Injectable({
  providedIn: 'root'
})


export class CryptostoreService {

  STORAGE_KEY = 'local_cryptolist';

  cryptoList: Cryptoasset[] = [];

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
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


   saveAndReload(assets: Cryptoasset[]) : Observable<Cryptoasset[]> {

    this.saveCryptoList(assets);
    return this.findAll();
   }



}
