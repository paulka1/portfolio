import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm:FormGroup;

  // Success message email send
  emailSend:boolean=false;

  constructor(
    private fb:FormBuilder,
    private contactService:ContactService
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  // Formulaire creation Product
  formInit(){
    this.contactForm = this.fb.group({
      contact_name: ['',Validators.required],
      contact_email: ['',[Validators.required, Validators.email]],
      contact_text: ['',Validators.required],
    })
  }

  onSubmit(){
    // this.contactService.sendEmail(this.contactForm.value).subscribe(
    //   res => {
    //     this.emailSend = true;
    //   }
    //   )
    this.formInit()
   }
}
