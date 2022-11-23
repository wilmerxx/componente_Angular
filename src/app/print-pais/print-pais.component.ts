import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-pais',
  templateUrl: './print-pais.component.html',
  styleUrls: ['./print-pais.component.scss']
})
export class PrintPaisComponent implements OnInit {
 @Input() print:string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
