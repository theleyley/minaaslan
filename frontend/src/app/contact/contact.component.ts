import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  payload = {};
  formSubscription: Subscription = new Subscription();
  onSubmission = false;
  contactForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl<string>('', [Validators.required])
  });
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.formSubscription = this.contactForm.valueChanges.subscribe((values: any) => {
      this.constructPayload(values);
    });
  }

  constructPayload(values: any) {
    this.payload = {
      fullname: values.fullName,
      email: values.email,
      subject: values.subject,
      message: values.message
    }
  }

  onSubmit() {
    console.log(this.payload);
    this.onSubmission = true;
    }

  route(route: any) {
    this.router.navigate([`${route}`]);
  }
}
