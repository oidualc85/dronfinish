import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styles: ``
})

export class ContactComponent {
  public formData = {
  nombre: '',
  telefono: '',
  email: '',
  mensaje:'',
  isSubmitted: false
  };


submitForm(): void {
  console.log('Datos guardados:', this.formData);

}

};