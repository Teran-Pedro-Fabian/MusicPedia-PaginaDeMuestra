import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reloj',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.scss']
})
export class RelojComponent implements OnInit {
  fecha: number = Date.now();
  hora: string = '';  // Inicializamos como string vacío

  constructor() { }

  ngOnInit() {
    // Actualizamos la hora cada segundo
    setInterval(() => {
      const ahora = new Date();
      this.hora = ahora.toLocaleTimeString();  // Formato de hora local
      this.fecha = Date.now();  // Actualizamos la fecha también
    }, 1000);
  }
}

  
