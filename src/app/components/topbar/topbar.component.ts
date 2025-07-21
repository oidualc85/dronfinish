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
      { title: 'Inicio', fragment: 'inicio' },
      { title: 'Problema', fragment: 'problemas-solucion' },
      { title: '¿Cómo funciona?', fragment: 'como-funciona' },
      { title: 'Beneficios', fragment: 'beneficios' },
      { title: 'FAQ', fragment: 'preguntas-frecuentes' },
      { title: 'Galería', fragment: 'galeria' },
    ];
}