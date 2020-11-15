
import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';




@Injectable({
  providedIn: 'root'
})


export class CryptostoreService {

  STORAGE_KEY = 'local_cryptolist';

  cryptoList = [];

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) {
   }






}
