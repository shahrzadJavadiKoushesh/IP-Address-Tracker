import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IP-Address-Tracker';

  inputForm!: FormGroup;

  constructor(private fb: FormBuilder){
    this.inputForm = this.fb.group({
        ipAddress: ['', Validators.required]
    })
  }
}
