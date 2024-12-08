import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.css'
})
export class CountdownComponent implements OnInit, OnDestroy, OnChanges {

  @Input() valorInicial: number = 0; // Recibe el valor inicial del conteo
  
  @Output() contadorDecrementado = new EventEmitter<number>(); // Evento para emitir el decremento del contador
  @Output() conteoFinalizado = new EventEmitter<void>(); // Evento para emitir cuando el conteo ha terminado
  public contador: number = 0; // Variable que mantiene el conteo
  private cuentaRegresivaTimerRef: any = null;

  ngOnInit(): void {
    this.inicializarConteo();// Inicializa el conteo
  }

  // Método exclusivo para inicializar el conteo

  inicializarConteo() {
    this.contador = this.valorInicial;  // Establece el valor del contador con el valor recibido
    console.log(`Conteo inicializado con valor: ${this.contador}`);
    this.iniciarConteoRegresivo(); // Llama nuevamente al método para seguir el conteo
    this.limipiarTiempoOutRef(); 
  }

  // Método para iniciar el conteo regresivo
  iniciarConteoRegresivo() {
    if (this.contador > 0) {
      setTimeout(() => {
        this.contador--; // Decrementa el contador cada segundo
        this.evaluarFinalConteo(); // Llama al método que maneja los eventos
       // this.iniciarConteoRegresivo(); // Llama nuevamente al método para seguir el conteo
      }, 1000); // 1 segundo
    }
  }

  // Método que evalúa el final del conteo y emite los eventos
  evaluarFinalConteo() {
    // Emitir un evento contadorDecrementado con el valor actual del contador
    this.contadorDecrementado.emit(this.contador);
    console.log("Contador:", this.contador);

    if (this.contador === 0) {
      // Emitir el evento conteoFinalizado cuando el contador llegue a 0
      this.conteoFinalizado.emit();
      console.log("El conteo regresivo ha finalizado");
    } else {
      // Llamar al método que sigue decreciendo el contador
      this.iniciarConteoRegresivo();
    }
  }

ngOnDestroy(): void {
this.limipiarTiempoOutRef();
}

  private limipiarTiempoOutRef(){
    if(this.cuentaRegresivaTimerRef){
      clearTimeout(this.cuentaRegresivaTimerRef);
      this.cuentaRegresivaTimerRef = null;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Valor Inicial cambio  a:", changes['valorInicial'].currentValue) ;
  }
}

