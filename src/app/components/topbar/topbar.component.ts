// src/app/components/topbar/topbar.component.ts

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StickyScrollDirective } from '@core/directives/sticky-scroll.directive';
import { MobileMenuComponent } from "../mobile-menu/mobile-menu.component";
                                                                                                                                                                                                               
@Component({
    selector: 'app-topbar',
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


    menuItems = [
      { title: 'Inicio', fragment: 'hero' },
      { title: 'Problema/solucion', fragment: 'about-4' },
      { title: '¿Cómo funciona?', fragment: 'app-service-3' },
      { title: 'Beneficios', fragment: 'pricing' },
      { title: 'FAQ', fragment: 'app-faq-3' },
      { title: 'Galeria', fragment: 'testimonials' },
    ];
}