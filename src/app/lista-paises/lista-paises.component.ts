import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-paises',
  templateUrl: './lista-paises.component.html',
  styleUrls: ['./lista-paises.component.scss']
})
export class ListaPaisesComponent implements OnInit {
  @Input() onPais = new EventEmitter<string>();
 
  constructor() { }

  ngOnInit(): void {
  }

}
