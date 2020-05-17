import { Component, OnInit, NgZone } from '@angular/core';
import {NgForm, FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import { StaticpagesService } from './../staticpages.service';
import { Contact } from '../contact';

declare var M: any;
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})

export class ContactUsComponent implements OnInit {
  ContactDetail: Contact[];
  registerForm: FormGroup;
  submitted = false;
  constructor(private contactservice: StaticpagesService, private formBuilder: FormBuilder) {  }
  ngOnInit() {
    // this.setFormState();
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.getContactDetails();
  }
  get f() { return this.registerForm.controls; }
  getContactDetails(){
    this.contactservice.getContactFromStore().subscribe(
      contacts => this.ContactDetail = contacts
    );
  }
  // resetForm(form?: NgForm){
  //   if (form){
  //     form.reset();
  //   }
  // }
  onSubmit() {
    this.submitted = true;
    console.log(this.registerForm.value);

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.contactservice.createContact(this.registerForm.value).subscribe((res) => {
    this.getContactDetails();
    // this.resetForm(data);
    this.registerForm.reset();
    });
    alert('SUCCESS!! :-)');
  }
}
