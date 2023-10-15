import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './components/main/main.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { BagComponent } from './components/bag/bag.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AccountComponent } from './components/account/account.component';
import { DepcriptionComponent } from './components/depcription/depcription.component';
import { CoreComponent } from './components/core/core.component';
import { MyClickDirective } from './my-click.directive';
import { SearchComponent } from './components/search/search.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    MainComponent,
    ProductDetailComponent,
    BagComponent,
    CheckoutComponent,
    AccountComponent,
    DepcriptionComponent,
    CoreComponent,
    MyClickDirective,
    SearchComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
