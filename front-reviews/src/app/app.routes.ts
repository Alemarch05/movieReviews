import { Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { FormularioComponent } from './formulario/formulario/formulario.component';
import { ComentariosComponent } from './comentarios/comentarios/comentarios.component';

export const routes: Routes = [
{path: '',component: ComentariosComponent},
{path: 'login', component: LoginComponent},
{path: 'formulario', component: FormularioComponent},
];
