
// auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  
  // Verificar si existe el token en localStorage (usa el mismo nombre que tienes en tu API)
  const token = localStorage.getItem('auth_token'); // Cambia 'auth_token' por el nombre que uses
  
  if (token) {
    console.log('Token encontrado:', token);
    return true;
  } else {
    
    router.navigate(['/login']);
    
    return false;
  }
};