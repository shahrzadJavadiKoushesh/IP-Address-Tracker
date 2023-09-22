import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IP-Address-Tracker';

  constructor(private fb: FormBuilder) { }

  inputForm = this.fb.group({
    ipAddress: ['', Validators.required]
  })

  submitData() {
    let IPAddress = this.inputForm.value.ipAddress;
    console.log(IPAddress);
    
  }


}
