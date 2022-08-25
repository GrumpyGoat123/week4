import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users = [{'email' : 'abc@com.au', 'pwd' : '123'},{'email' : 'abd@com.au', 'pwd' : '123'},{'email' : 'abe@com.au','pwd':'123'}]

  email = "";
  pwd = "";

  login = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loginFunc(){

    for (let i=0; i<this.users.length; i++){
      if(this.email == this.users[i].email && this.pwd == this.users[i].pwd){
        this.login = true;
        break;
      }else{
        this.login = false;
      }
    }

    if (this.login == true){
      this.router.navigateByUrl('/account');
    }else{
      alert("Username or password is incorrect");
    }

  }

}
