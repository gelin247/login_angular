import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario) {
    if(usuario.nome === 'usuario@email.com' && usuario.senha === '1234') {
      this.usuarioAutenticado = true;
      this.router.navigate(['/']);

    } else {
      this.usuarioAutenticado = false;
    }
  }
}
