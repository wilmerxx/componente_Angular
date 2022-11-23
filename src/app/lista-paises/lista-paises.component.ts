import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-paises',
  templateUrl: './lista-paises.component.html',
  styleUrls: ['./lista-paises.component.scss']
})
export class ListaPaisesComponent implements OnInit {
  
  selectedObject : paises | undefined;

  ListaPaises = [
    {id: '1', name: 'Ecuador'},
    {id: '2', name: 'Japon'},
    {id: '3', name: 'Bolivia'},
    {id: '4', name: 'Delft'}
  ]
 
  constructor() { }

  ngOnInit(): void {
  }



  saveAll(){

  }

 

}

interface paises{
  id:string;
  name:string;
}
