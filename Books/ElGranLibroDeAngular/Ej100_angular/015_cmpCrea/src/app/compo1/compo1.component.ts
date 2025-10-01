import { Component } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-compo1',
  standalone: false,
  templateUrl: './compo1.component.html',
  styleUrl: './compo1.component.css'
})
export class Compo1Component {

  texto: string = "";

  saludar() { this.texto = "Hola mundo en compo1"; }

}
