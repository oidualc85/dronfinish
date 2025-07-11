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

        // MODIFICA ESTA LÍNEA PARA AÑADIR LA NUEVA FUNCIÓN
        provideRouter(
            routes,
            withInMemoryScrolling({
                scrollPositionRestoration: 'enabled', // Opcional: restaura el scroll al usar los botones de atrás/adelante del navegador
                anchorScrolling: 'enabled'           // ¡Esta es la clave! Habilita el desplazamiento a anclajes.
            })
        ),
        
        // El resto de tus providers se mantienen igual
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