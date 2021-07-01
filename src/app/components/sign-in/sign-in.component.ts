import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {LoginRegisterInfo} from "../../model/login-register-info.model";
import {AccountService} from "../../service/account.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {


  public message: string = '';

  public signingInForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  public onSelect () {
    const username = this.signingInForm.value.username;
    const password = this.signingInForm.value.password;
    let registerInfo: LoginRegisterInfo = {success: false, username: '', message: ''};
    this.accountService.registerUser(username, password).subscribe(
      (loginRegisterInfo: LoginRegisterInfo) => {
        registerInfo = loginRegisterInfo
      }
    )

    this.signingInForm.reset();

    this.message = registerInfo.message;
  }

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

}
