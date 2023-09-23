import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IP-Address-Tracker';

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  inputForm = this.fb.group({
    ipAddress: ['', Validators.required]
  })



  submitData() {
    let IPAddress = this.inputForm.value.ipAddress;
    console.log(IPAddress);

    let headers = new HttpHeaders({
      'x-rapidapi-host': 'https://geo.ipify.org/api/v2/country',
      'x-rapidapi-key': 'at_fi2fk5FunRtfBcGEAXUoJSMjLNcli',
      
    });

    this.http
      .get<any>('https://geo.ipify.org/api/v2/country', {
        headers: headers,
      })
      .subscribe(data => {
        console.log(data);
      });

  }


}
