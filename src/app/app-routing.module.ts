import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { MainComponent } from './components/main/main.component';
import { ProductComponent } from './components/product/product.component';
import { BagComponent } from './components/bag/bag.component';
import { BagItemComponent } from './components/bag/bag-item/bag-item.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AddPaymentComponent } from './components/add-payment/add-payment.component';
import { AddressComponent } from './components/checkout/address/address.component';
import { InforComponent } from './components/checkout/infor/infor.component';
import { BagCheckoutComponent } from './components/bag/bag-checkout/bag-checkout.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'products', component: ProductComponent },
  { path: 'productsdetail/:id', component: ProductDetailComponent },
  { path: 'bag', component: BagItemComponent },
  { path: 'bagcheckout', component: BagCheckoutComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'payment', component: AddPaymentComponent },
  { path: 'address', component: AddressComponent },
  { path: 'infor', component: InforComponent },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
