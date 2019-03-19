import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username;
  password;
  error;
  constructor(private router : Router ) { 
    
  }

  ngOnInit() {
    
  }

  onSubmit(){
    
    if(this.username){
      if(this.password){
        this.router.navigate(['/dashboard']);
      }else{
        this.error = "Please Enter Password"
      }
    }else{
      this.error = "Please Enter Username"
    }
  }

}
