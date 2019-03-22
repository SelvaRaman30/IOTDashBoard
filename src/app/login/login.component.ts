import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  /* #region  Declaration  */
  username;
  password;
  cnfPassword;
  isRegisterLinkClicked = false;
  bttontext = 'Login';
  error;
  btnLogin;
  /* #endregion */
  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  removeError() {
    this.error = null;
  }

  onSubmit() {


    if (!this.isRegisterLinkClicked) {
    } else {
   }
  }

  onlinkClick() {
    this.bttontext = this.isRegisterLinkClicked ? 'Login' : 'Register';
    this.removeError();
    if (!this.isRegisterLinkClicked) {
        this.isRegisterLinkClicked = true;
        console.log(this.btnLogin);
    } else {
      this.isRegisterLinkClicked = false;
    }
  }

}
