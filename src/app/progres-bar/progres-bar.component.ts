import { Component, Input, OnInit } from '@angular/core';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-progres-bar',
  templateUrl: './progres-bar.component.html',
  styleUrls: ['./progres-bar.component.scss']
})
export class ProgresBarComponent implements OnInit {
  @Input() progress:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
