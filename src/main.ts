// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),       // prêt pour les appels API
    // 👉 Si tu veux tester le mode “zone‑less” :
    // provideZoneChangeDetection('noop'),
  ],
}).catch(err => console.error(err));
