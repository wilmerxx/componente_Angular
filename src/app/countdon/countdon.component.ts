import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-countdon',
  templateUrl: './countdon.component.html',
  styleUrls: ['./countdon.component.scss']
})
export class CountdonComponent implements OnInit {
  @Output() onDrecrease = new EventEmitter<number>();
  @Output() onComplete = new EventEmitter<void>();

  @Input() init:number = 0;
  public counter:number = 0;
  private countdownTimerRef: any = null;

  constructor() { }

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown(){
    if(this.init && this.init > 0){
      this.clearTimeoutRef();
      this.counter = this.init;
      this.doCountdown();
      
    }

  }
  doCountdown() {
    this.countdownTimerRef = setTimeout(() => {
      this.counter = this.counter - 1;
      this.processCountdown();
    }, 1000);
  }

  private clearTimeoutRef(){
    if(this.countdownTimerRef){
      clearTimeout(this.countdownTimerRef);
      this.countdownTimerRef = null;
    }
  }

  processCountdown() {
    //emitir un evento de conteo
    this.onDrecrease.emit(this.counter);
    console.log("La cuenta va en: ", this.counter);
    
    //verificar si llega a cero
    if(this.counter==0){
      //emitir un evento del contador
      this.onComplete.emit();
      console.log("-----Fin del contador-----");
    }else{
      this.doCountdown();
    }


  }

}
