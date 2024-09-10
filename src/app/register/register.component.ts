import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // Initialize the form with form controls and validators
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      numberMobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Method to handle form submission
  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form Submitted', this.registerForm.value);
      // Here you can add further logic to handle form submission
    } else {
      console.log('Form is invalid');
    }
  }

  // Method to reset the form
  onReset() {
    this.registerForm.reset();
  }
}
