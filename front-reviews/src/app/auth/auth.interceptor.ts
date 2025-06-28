import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
export const authInterceptor: HttpInterceptorFn = (req, next) => {
   const platformId = inject(PLATFORM_ID);
     let token: string | null = null;
    if (isPlatformBrowser(platformId)) {
    token = localStorage.getItem('auth_token');
  }
  
  if (!token) {
    console.warn('No token found in localStorage, proceeding without authorization header.');

return next(req);
  }
  const authReq = req.clone({
    
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  })
  console.log('Intercepted request with token:', token);
  return next(authReq);
};
