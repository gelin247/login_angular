import { Usuario } from './usuario';
import { AuthService } from './../../pages/login/auth.service';
import { LoginModel } from './../../models/LoginModel';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  public usuario: Usuario = new Usuario();


  constructor(private formbuilder: FormBuilder, private router: Router, private authService: AuthService) {

  }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    });
  }

  submitLogin() {
    debugger
    var dadosLogin = this.loginForm.getRawValue() as LoginModel;
  }

  fazerLogin() {
    this.authService.fazerLogin(this.usuario);
  }

  criarLogin() {
    this.router.navigate(['/cadastro'])
  }

}
