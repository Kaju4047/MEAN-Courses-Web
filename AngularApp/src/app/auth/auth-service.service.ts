import { Injectable } from '@angular/core';
import { Registration } from './registration/registration';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  selectedContact: Registration;
  registrationUrl = 'http://localhost:3000/registration';
  ContactDetail: any[];

  constructor(private http: HttpClient) { }
  getRegistrationFromStore(): Observable<Registration[]>{
    return this.http.get<Registration[]>(this.registrationUrl);
  }
  createRegistration(registration: Registration): Observable<Registration>{
    console.log(registration);
    return this.http.post<Registration>(this.registrationUrl, registration );
  }
}
