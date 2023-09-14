import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  payload = {};
  formSubscription: Subscription = new Subscription();
  onSubmission = false;
  baseUrl: string = '';

  contactForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl<string>('', [Validators.required])
  });
  constructor(private router: Router, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.baseUrl = `${environment.apiBase}`;
    this.formSubscription = this.contactForm.valueChanges.subscribe((values: any) => {
      this.constructPayload(values);
    });
  }

  constructPayload(values: any) {
    this.payload = {
      token: 'recaptcha token',
      formName: 'Mina Aslan Contact Form',
      formData: {
        fullname: values.fullName,
        email: values.email,
        subject: values.subject,
        message: values.message
      }
    }
  }

  onSubmit() {
    const token = 'recaptcha token';
    const url = `${this.baseUrl}/api/ezforms/submit`;
    this.http.post<any>(url, {token, formData: this.payload}).pipe(map((response) => {
              // Success
              this.onSubmission = true;
            }, (err: any) => {
              // Error
              this.onSubmission = true;

            })
        ).subscribe();
  }

  route(route: any) {
    this.router.navigate([`${route}`]);
  }
}
