import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/interfaces/user';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
  userService = inject(UserService);

  form = new FormGroup({
    givenName: new FormControl('', Validators.required),
    surName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    confirmPassword: new FormControl('', [
      Validators.required, 
      Validators.minLength(4),
    ]),
  },
  this.passwordConfirmValidator,);

  passwordConfirmValidator(form: FormGroup) {
    if (form.get('password').value !== form.get('confirmPassword').value) {
      form.get('confirmPassword').setErrors({passwordMismatch: true});
      return { passwordMismatch: true};
    }
    return {};
  }

  onSubmit(value: any) {
    console.log(value);

    const user = this.form.value as User
    delete user ['confirmPassword']

    this.userService.registerUser(user).subscribe({
      next: (response) => {},
      error: (response) => {
        const message = response.error.msg;
        console.log('Error registering user', message)
      },
    })
  }

  
}
