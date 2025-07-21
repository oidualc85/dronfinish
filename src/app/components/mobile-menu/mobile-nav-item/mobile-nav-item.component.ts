import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
interface MenuItem {
  title: string;
  link?: string;
  isOpen?: boolean;
  subMenu?: MenuItem[];
}

@Component({
  selector: 'app-mobile-nav-item',
  imports: [CommonModule, RouterLink],
  templateUrl: './mobile-nav-item.component.html',
  styles: ``
})
export class MobileNavItemComponent {
  @Input() item!: MenuItem;

  @Output() closeMenu = new EventEmitter<void>();

  handleClick(item: MenuItem) {
    if (!item.subMenu) {
      this.closeMenu.emit(); // ✅ Le avisa al padre que debe cerrar el menú
    } else {
      this.toggleSubMenu(item);
    }
  }



  toggleSubMenu(item: MenuItem, event?: Event) {
    if (event) event.stopPropagation();
    item.isOpen = !item.isOpen;
  }
}
