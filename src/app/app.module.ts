import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './components/main/main.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { BagComponent } from './components/bag/bag.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CoreComponent } from './components/core/core.component';
import { MyClickDirective } from './my-click.directive';
import { SearchComponent } from './components/search/search.component';
import { ProductComponent } from './components/product/product.component';
import { BagItemComponent } from './components/bag/bag-item/bag-item.component';
import { TotalOderComponent } from './components/bag/total-oder/total-oder.component';
import { AddPaymentComponent } from './components/add-payment/add-payment.component';
import { AddressComponent } from './components/checkout/address/address.component';
import { InforComponent } from './components/checkout/infor/infor.component';
import { BagCheckoutComponent } from './components/bag/bag-checkout/bag-checkout.component';

@NgModule({
  declarations: [
    MainComponent,
    ProductDetailComponent,
    BagComponent,
    CheckoutComponent,
    CoreComponent,
    MyClickDirective,
    SearchComponent,
    ProductComponent,
    BagItemComponent,
    TotalOderComponent,
    AddPaymentComponent,
    AddressComponent,
    InforComponent,
    BagCheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
