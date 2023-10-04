import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpService } from './http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IP-Address-Tracker';
  data : any;
  
  constructor(private fb: FormBuilder, private httpService: HttpService) { }

  inputForm = this.fb.group({
    ipAddress: ['', Validators.required]
  })

  submitData() {
    let IPAddress = this.inputForm.value.ipAddress;
    console.log(IPAddress);
    console.log(typeof(IPAddress))

    if (!IPAddress){
      this.httpService.getLocation('8.8.8.8').subscribe(
        (response) => {this.data = response}
      )
      return
    }
    this.httpService.getLocation(IPAddress).subscribe(
      (response) => {this.data = response },
      (error) => {console.log(error)}
    )
    console.log(this.data)

  }


}
