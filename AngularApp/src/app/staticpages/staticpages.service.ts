import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Contact } from './contact';



// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class StaticpagesService {
  // contactUrl = '/api/contacts';
  selectedContact: Contact;
  contactUrl = 'http://localhost:3000/employees/';
  ContactDetail: any[];

  constructor(private http: HttpClient) { }
  getContactFromStore(): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.contactUrl);
  }
  createContact(contact: Contact): Observable<Contact>{
    console.log(contact);
    return this.http.post<Contact>(this.contactUrl, contact );
  }
}
