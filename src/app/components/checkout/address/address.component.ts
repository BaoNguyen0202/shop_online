import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InformationService } from 'src/app/information.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {
  addresses: any[] = [];

  constructor(private informationService: InformationService, private router: Router) { }

  addAddress() {
    let shippingName = (document.getElementById('shipping-name') as HTMLInputElement).value;
    let streetName = (document.getElementById('street-name') as HTMLInputElement).value;
    let city = (document.getElementById('city') as HTMLInputElement).value;
    let state = (document.getElementById('state') as HTMLInputElement).value;
    let country = (document.getElementById('country') as HTMLInputElement).value;
    let check = shippingName.length && streetName.length && city.length && state.length && country.length > 0;
    if(check) {
      const newAddress = {
        shippingName: shippingName,
        streetName: streetName,
        city: city,
        state: state,
        country: country,
      };
  
      this.informationService.addAddress(newAddress);
    
      shippingName = '';
      streetName = '';
      city = '';
      state = '';
      country = '';
    
      console.log(this.informationService.getAddresses());
      this.showSuccessMessage();
    }else {
      alert("Please complete all information")
    }
  }

  isToastActive: boolean = false;
  isProgressActive: boolean = false;
  private timer1: any;
  private timer2: any;

  showSuccessMessage() {
    this.isToastActive = true;
    this.isProgressActive = true;

    this.timer1 = setTimeout(() => {
      this.isToastActive = false;
    }, 3000);

    this.timer2 = setTimeout(() => {
      this.isProgressActive = false;
      this.router.navigate(['checkout']);
    }, 3300);
  }

  closeToast() {
    this.isToastActive = false;
    setTimeout(() => {
      this.isProgressActive = false;
    }, 300);
    clearTimeout(this.timer1);
    clearTimeout(this.timer2);
  }
}
