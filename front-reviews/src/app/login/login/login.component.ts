import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoginData } from '../../interface/LoginData';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-login',
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent 

{
  loginData: LoginData = {
    email: '',
    password: ''

  }

  
  
constructor(private authService : AuthService, private router: Router,
    private route: ActivatedRoute) {

 }
onsubmit(): void {
  this.authService.login(this.loginData).subscribe({
    next: (response) => {
      console.log('Login successful:', response);
       localStorage.setItem('auth_token', response.token);
                this.router.navigateByUrl("/formulario");

      

      // Aquí puedes manejar la respuesta del login, como redirigir al usuario o mostrar un mensaje
    },
    error: (error) => {
      console.error('Login failed:', error);
      // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario
    }
  });
}
}
