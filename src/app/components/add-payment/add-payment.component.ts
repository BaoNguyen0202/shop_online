import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent {
  isToastActive: boolean = false;
  isProgressActive: boolean = false;
  private timer1: any;
  private timer2: any;
  constructor(private router: Router) { }
  showSuccessMessage() {
    this.isToastActive = true;
    this.isProgressActive = true;

    this.timer1 = setTimeout(() => {
      this.isToastActive = false;
    }, 3000);

    this.timer2 = setTimeout(() => {
      this.isProgressActive = false;
      this.router.navigate(['/']);
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
