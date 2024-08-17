import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal-ejemplo1',
  standalone: true,
  imports: [],
  templateUrl: './signal-ejemplo1.component.html',
  styleUrl: './signal-ejemplo1.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export default class SignalEjemplo1Component {
  contador = signal<number>(0);
  incrementarContador(){
    this.contador.update((contador)=> contador +1)
  }
  decrementaContador(){
    this.contador.update((contador)=> contador -1)
  }
}
