import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  standalone: true,
  imports: [],
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.css'
})
export class BotonComponent {
  private contador = 0;
  @Output() numeroCambiado = new EventEmitter<number>();

  incrementar() {
    this.contador++;
    this.numeroCambiado.emit(this.contador);
  }

}
