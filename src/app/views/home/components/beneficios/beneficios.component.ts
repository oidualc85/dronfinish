import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Beneficio {
  icono: string;
  titulo: string;
  resumen: string;
  puntos: string[];
}

@Component({
  selector: 'app-beneficios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './beneficios.component.html',
  // deja el SCSS vacío o elimínalo; no es obligatorio
})
export class BeneficiosComponent {
  beneficios: Beneficio[] = [
    {
      icono: 'assets/img/icons/check1.svg',
      titulo: 'Más seguro',
      resumen: 'Eliminamos el trabajo en altura y el contacto directo con productos químicos.',
      puntos: [
        'Operación 100 % desde tierra: sin andamios ni cuerdas.',
        'Menos accidentes y pólizas de riesgo.',
        'Cumplimos la normativa de seguridad industrial vigente.',
      ],
    },
    {
      icono: 'assets/img/icons/check2.svg',
      titulo: 'Más rápido',
      resumen: 'Pintamos en horas lo que el método tradicional demora días.',
      puntos: [
        'Cobertura aérea continua, sin detener la faena.',
        'Hasta 1 000 m²/h (según superficie y pintura).',
        'Menos tiempo de inactividad para tu operación.',
      ],
    },
    {
      icono: 'assets/img/icons/check3.svg',
      titulo: 'Más económico',
      resumen: 'Menos infraestructura y mano de obra → menor coste total.',
      puntos: [
        'Sin arriendo de grúas ni andamios.',
        'Equipo reducido y menos seguros laborales.',
        'Pulverización precisa: ahorro de pintura.',
      ],
    },
  ];
}
