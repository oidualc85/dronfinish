// src/app.config.ts

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// Importa 'withInMemoryScrolling' desde el router de Angular
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { IMAGE_CONFIG } from '@angular/common';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),


        provideRouter(
            routes,
            withInMemoryScrolling({
                scrollPositionRestoration: 'enabled', 
                anchorScrolling: 'enabled'           
            })
        ),
        

        provideAnimations(),
        {
            provide: IMAGE_CONFIG,
            useValue: {
                disableImageSizeWarning: true,
                disableImageLazyLoadWarning: true
            }
        },
    ]
};