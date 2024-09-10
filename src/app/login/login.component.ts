import { Component } from '@angular/core'; 
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] 
})
export class LoginComponent { 
  loginForm: FormGroup; 
  Submitted = false;     
  UserLogin = { email: "", password: "" };

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  SubmitLogin() {
    this.Submitted = true;
    if (this.loginForm.invalid) {
      return;
    } else {
      this.UserLogin.email = this.loginForm.value.email;
      this.UserLogin.password = this.loginForm.value.password;
      if (this.UserLogin.email === "Zakaki651@gmail.com" && this.UserLogin.password === "Qwerty12345") {
        alert("เข้าสู่ระบบสำเร็จ");
      } else {
        alert("เข้าสู่ระบบไม่สำเร็จ");
      }
    }
  }

  ResetForm() {
    this.Submitted = false; 
    this.loginForm.reset();
  }
}
