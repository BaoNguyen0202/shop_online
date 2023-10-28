import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InformationService } from 'src/app/information.service';

@Component({
  selector: 'app-infor',
  templateUrl: './infor.component.html',
  styleUrls: ['./infor.component.css']
})
export class InforComponent {
  addinfo: any[] = [];
  
  constructor(private informationService: InformationService, private router: Router) { }

  addInfor() {
    let gmail = (document.getElementById('gmail') as HTMLInputElement).value;
    let phone = (document.getElementById('phone') as HTMLInputElement).value;
    let firstName = (document.getElementById('first-name') as HTMLInputElement).value;
    let LastName = (document.getElementById('last-name') as HTMLInputElement).value;
    let birthDay = (document.getElementById('date') as HTMLInputElement).value;
    let check = gmail.length && phone.length && firstName.length && LastName.length && birthDay.length > 0 ;
   if(check){
    const newInfo = {
      gmail: gmail,
      phone: phone,
      firstName: firstName,
      LastName: LastName,
      birthDay: birthDay,
    };

    this.informationService.addInfor(newInfo);
  
    gmail = '';
    phone = '';
    firstName = '';
    LastName = '';  
    birthDay = '';
  
    console.log(this.informationService.getInfor(),'123');
    this.showSuccessMessage();
   }else{
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
