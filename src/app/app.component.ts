import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { CountdownComponent } from './countdown/countdown.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BotonComponent } from './boton/boton.component';
import { InputComponent } from './input/input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProgressBarComponent, CountdownComponent, CommonModule, FormsModule, BotonComponent, InputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lab1U1-JeynerManzaba';

  progreso: number = 0;        // Lleva el progreso del conteo en porcentaje
  inicioConteo: number = 10;    // Valor inicial del conteo regresivo

  
  actualizarProgreso($event: number) {
    this.progreso = ((this.inicioConteo - $event) / this.inicioConteo) * 100;
  }

  imprimirFinDelConteo(): void {
    // console.log("El conteo regresivo ha finalizado.");
  }
    

  numero: number = 0;
  actualizarNumero(nuevoNumero: number) {
    this.numero = nuevoNumero;
  }

}
