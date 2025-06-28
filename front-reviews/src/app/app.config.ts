import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient,withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { withInterceptors } from '@angular/common/http';
import { authInterceptor } from './auth/auth.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withFetch(),withInterceptors([authInterceptor]))
,provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay())]
};
