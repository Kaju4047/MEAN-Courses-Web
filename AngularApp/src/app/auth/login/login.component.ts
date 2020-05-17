import { Component, OnInit } from '@angular/core';
import {NgForm, FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  massage: string;
  Error = false;

  constructor(private formbuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
  });
  }
  onSubmit() {
    console.log("test login");
    this.router.navigate(['/']);
    // const login = this.loginForm.value;
    // this.login(login);
  }
 

}
