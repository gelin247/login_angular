import { CadastroComponent } from './pages/login/cadastro/cadastro.component';
import { MainComponent } from './pages/login/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { ModuleWithProviders, NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// rota para direcionar sempre na tela de login

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: MainComponent },
  { path: 'cadastro', component: CadastroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routing: ModuleWithProviders<Component> =
  RouterModule.forRoot(routes);
