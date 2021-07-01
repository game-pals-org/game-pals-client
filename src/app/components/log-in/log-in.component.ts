import { Component, OnInit } from '@angular/core';
import {LoginStateService} from "../../service/login-state.service";
import {FormControl, FormGroup} from "@angular/forms";
import {AccountService} from "../../service/account.service";
import {LoginRegisterInfo} from "../../model/login-register-info.model";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  public message: string = '';

  public loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  public onSelect () {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    let loginInfo: LoginRegisterInfo = {success: false, username: '', message: ''};
    this.accountService.loginUser(username, password).subscribe(
      (loginRegisterInfo: LoginRegisterInfo) => {
        loginInfo = loginRegisterInfo
      }
    )

    this.loginForm.reset();
    if (loginInfo.success){
      this.loginStateService.isLogged = true;
      this.loginStateService.username = username;
    } else {
      this.loginStateService.isLogged = false;
    }
    this.message = loginInfo.message;
  }

  constructor(private loginStateService: LoginStateService, private accountService: AccountService) { }

  ngOnInit(): void {
  }

}