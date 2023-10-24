import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor() {
    const storedAddresses = localStorage.getItem('addresses');
    if (storedAddresses) {
      this.addresses = JSON.parse(storedAddresses);
    }
    const storedInfo = localStorage.getItem('info');
    if (storedInfo) {
      this.addinfo = JSON.parse(storedInfo);
    }
  }

  addresses: any[] = [];
  addinfo: any[] = [];

  addAddress(address: any) {
    this.addresses.push(address);
    localStorage.setItem('addresses', JSON.stringify(this.addresses));
  }

  getAddresses() {
    return this.addresses;
  }

  addInfor(info: any) {
    this.addinfo.push(info);
    localStorage.setItem('info', JSON.stringify(this.addinfo));
  }

  getInfor() {
    return this.addinfo;
  }
}
