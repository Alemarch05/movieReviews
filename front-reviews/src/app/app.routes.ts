import { Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { FormularioComponent } from './formulario/formulario/formulario.component';
import { ComentariosComponent } from './comentarios/comentarios/comentarios.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
     {
    path: '',
    redirectTo: '/coments',
    pathMatch: 'full'
  },
{path: 'coments',component: ComentariosComponent},
{path: 'login', component: LoginComponent},
{path: 'formulario', component: FormularioComponent, canActivate: [authGuard]},
];
