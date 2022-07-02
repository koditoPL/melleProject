import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IsLoggedComponent } from 'src/app/components/is-logged/is-logged.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  
  isLogged = window.localStorage.getItem('user')
  emailText = ''
  nameText = ''
  
  changeEmailToText(email:String){
   return email.split('@')[0]
  }
  
  handleLogout(){
    window.localStorage.removeItem('user')
    this.router.navigate(['/'])
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(this.isLogged === null){
      this.router.navigate(['/'])
    }
    else{
      const email= JSON.parse(this.isLogged)
      this.emailText =email.email
      const changeText = this.changeEmailToText(this.emailText)
      this.nameText = changeText
    }
  }

}
