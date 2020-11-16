import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http:HttpClient
    ) { }

    sendEmail(contactForm){ 
     return this.http.post("http://localhost:4545/send", contactForm ,{responseType:'text'})
  }
}
