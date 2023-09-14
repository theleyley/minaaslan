import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {environment} from "../../environments/environment";
import {WorkService} from "../services/work.services";
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  env = environment;
  payload = {};
  pageData: any;
  formSubscription: Subscription = new Subscription();
  baseUrl: string = '';
  onSuccess = false;
  onSubmitFail = false;

  contactForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl<string>('', [Validators.required])
  });

  constructor(private workService: WorkService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.baseUrl = `${environment.apiBase}`;
    this.formSubscription = this.contactForm.valueChanges.subscribe((values: any) => {
      this.constructPayload(values);
    });
    this.workService.getContactPageData().subscribe((data) => {
      if (data) {
        this.pageData = data.attributes;
      }
    })
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
              this.onSuccess = true;
            }, (err: any) => {
              // Error
              this.onSubmitFail = true;

            })
        ).subscribe();
  }

  route(route: any) {
    this.router.navigate([`${route}`]);
  }

  buildPath(path: any) {
    return `${this.env.apiBase}${path}`;
  }
}
