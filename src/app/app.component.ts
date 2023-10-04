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

  }


}
