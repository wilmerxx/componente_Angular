import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  //plantilla del html
  templateUrl: './app.component.html',
  //estilos
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counterProgress:number = 0;
  totalCountdown:number = 15;
 
  constructor(
    
  ){
    
  }
  updateProgress($event:number){
    this.counterProgress = (this.totalCountdown - $event) / this.totalCountdown*100;
  }

  countdownFinished(){
    console.log('El conteo finalizo');
  }

    
  
}
