import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm:FormGroup;

  constructor(
    private fb:FormBuilder,
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
    console.log(this.contactForm.value)
  //   this.contactService.sendEmail(this.contactForm.value).subscribe(
  //     res => {
  //       this.emailSend = true;
  //     }
  //     )
  //     this.formInit()
   }
  
}
