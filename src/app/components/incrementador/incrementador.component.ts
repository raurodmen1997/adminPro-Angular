import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input() porcentaje: number = 50
  @Input('nombre') leyenda: string = "Leyenda"

  constructor() {
    //El valor que tiene por defecto la variable leyenda y porcentaje
    console.log("Leyenda", this.leyenda)
    console.log("Porcentaje", this.porcentaje)
  }

  ngOnInit() {
    //Una vez que se inicializa el componente, pasa a tener el valor que tiene asignado en el padre
    console.log("Leyenda", this.leyenda)
    console.log("Porcentaje", this.porcentaje)
  }


  cambiarValor(valor:number){

    if(this.porcentaje == 100 && valor >= 0){
      this.porcentaje = 100
    }else if(this.porcentaje == 0 && valor <= 0){
      this.porcentaje = 0
    }else{
      this.porcentaje += valor
    }
    console.log(this.porcentaje)
  }

}
