import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'holaMundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.scss']
})
export class HolaMundoComponent implements OnInit {

  public miNombre = 'Marny Lopez';

  constructor() { }

  ngOnInit(): void {
  }

}
