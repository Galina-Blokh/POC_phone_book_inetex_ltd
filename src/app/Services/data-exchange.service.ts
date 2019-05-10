import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataExchangeService {
static page = 'auth';
  constructor() { }

  static setPage(value){
    this.page = value;
  }

  static getPage(){
    return this.page;
  }
}
