// src/app/components/topbar/topbar.component.ts

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StickyScrollDirective } from '@core/directives/sticky-scroll.directive';
import { MobileMenuComponent } from "../mobile-menu/mobile-menu.component";

@Component({
    selector: 'app-topbar',
    standalone: true, // Asegúrate de que es standalone
    imports: [MobileMenuComponent, CommonModule, StickyScrollDirective, RouterLink],
    templateUrl: './topbar.component.html',
    styles: ``
})
export class TopbarComponent {
    isActive = false;

    @Input() headerClass!: string;
    @Input() mobileHeaderClass!: string;
    @Input() mobileLogo!: string;
    @Input() mobileSidebarClass!: string;
    @Input() btnClass!: string;
    @Input() logo!: string;
    @Input() isAlert?: boolean;

    // REEMPLAZA LOS ARREGLOS ANTERIORES POR ESTE
    menuItems = [
      { title: 'Inicio', fragment: 'hero' },
      { title: 'Nosotros', fragment: 'about-4' },
      { title: 'Servicios', fragment: 'app-service-3' },
      { title: 'Planes', fragment: 'pricing' },
      { title: 'FAQ', fragment: 'app-faq-3' },
      { title: 'Testimonios', fragment: 'testimonials' }
    ];
}