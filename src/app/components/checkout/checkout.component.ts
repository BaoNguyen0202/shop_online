import { Component } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { InformationService } from 'src/app/information.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  cartItems: any[];
  hasAddress: boolean = false;
  hasInfo: boolean = false;
  shippingName: string = '';
  streetName: string = '';
  city: string = '';
  country: string = '';
  gmail: string = '';
  phone: string = '';
  lastName: string = '';
  firstName: String = '';
  shippingAddressData: any = {
    name: 'Bao Nguyen',
    address: '123 Nam tu liem',
    city: 'Ha Noi',
    country: 'Việt Nam'
  };
  shippingInfoData: any = {
    gmail: 'bao@gmail.com',
    phone: '8499999999',
    lastName: 'Bao',
  };
  constructor(private cartService: CartService, private informationService: InformationService) {
    this.cartItems = cartService.getItems();
  }

  ngOnInit() {
    const addresses = this.informationService.getAddresses();
    console.log(addresses, "address");

    if (addresses.length > 0) {
      this.hasAddress = true;
      const address = addresses[addresses.length - 1];
      this.shippingName = address.shippingName;
      this.streetName = address.streetName;
      this.city = address.city;
      this.country = address.country;
      console.log(address);
      
    }
    const addinfo = this.informationService.getInfor();
    console.log(addinfo, "infor");

    if (addinfo.length > 0) {
      this.hasInfo = true;
      const info = addinfo[addinfo.length - 1];
      this.gmail = info.gmail;
      this.phone = info.phone;
      this.firstName = info.firstName;
      console.log(info);
      
    }
  }
}
