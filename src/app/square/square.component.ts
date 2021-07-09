import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    
      <button nbButton *ngIf="!value">{{ value }}</button>
      <button nbButton hero status="success" *ngIf="value == 'X'">{{ value }}</button>
      <button nbButton hero status="info" *ngIf="value == 'O'">{{ value }}</button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }']
})
export class SquareComponent {

  //randomz: number | undefined;
  //constructor(){
   // setInterval(() => this.randomz = Math.random(), 800);
  //}

  //randomz: number | undefined;
  //constructor(){
  // setInterval(() => this.randomz = Math.random(), 800);
  //}

  @Input()
  value: 'X' | 'O';
  

}
