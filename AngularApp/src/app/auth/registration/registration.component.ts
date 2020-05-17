import { Component, OnInit, NgZone } from '@angular/core';
import {NgForm, FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { Registration } from '../registration/registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  regForm: FormGroup;
  datasaved = false;
  // tslint:disable-next-line:no-inferrable-types
  showMsg: boolean = false;
  massage: string;
  submitted = false;
  RegistrationDetail: Registration[];
  constructor(private authserviceservice: AuthServiceService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    // this.regForm = this.formBuilder.group({
    //   fname: ['', Validators.required, Validators.minLength(5)],
    //   lname: ['', Validators.required, Validators.minLength(5)],
    //   email: ['', Validators.required, Validators.minLength(5), Validators.email],
    //   password: ['', Validators.required, Validators.minLength(5)]
    // });
    this.regForm = this.formBuilder.group({
      fname: [null, [Validators.required, Validators.minLength(5)]],
      lname: [null, [Validators.required, Validators.minLength(5)]],
      email: [null, [Validators.required, Validators.minLength(5), Validators.email]],
      password: [null, [Validators.required, Validators.minLength(5)]],
});
    // this.getRegistrationDetails();
  }
  get f() { return this.regForm.controls; }
  // getRegistrationDetails(){
  //   this.authserviceservice.getRegistrationFromStore().subscribe(
  //     registration => this.RegistrationDetail = registration
  //   );
  // }
  onSubmit() { 
    console.log(this.regForm.value);
      this.submitted = true;
     // stop here if form is invalid
    if (this.regForm.invalid) {
      return;
    }
    
    this.authserviceservice.createRegistration(this.regForm.value).subscribe((res) => {
      // this.getContactDetails();
      // this.router.navigate(['/login']);
      // this.resetForm(data);
      
      });
      this.showMsg = true;
      this.regForm.reset();
    // alert('SUCCESS!! :-)');
  }
}
