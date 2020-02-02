import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  //Variable quehace refencia a un elemento del HTML, cuya referencia en el HTML es #txtProgress
  @ViewChild('txtProgress', {static:false}) txtProgress:ElementRef;

  //Variables que va a recibir del componente padre, en este caso del componente ProgressComponent
  @Input() porcentaje: number = 50
  @Input('nombre') leyenda: string = "Leyenda"

  //Variables que va a emitir hacia el componente padre, en este caso al componente ProgressComponent
  @Output() cambioValor: EventEmitter<number> = new EventEmitter()

  constructor() {
    //El valor que tiene por defecto la variable leyenda y porcentaje
    //console.log("Leyenda", this.leyenda)
    //console.log("Porcentaje", this.porcentaje)
  }

  ngOnInit() {
    //Una vez que se inicializa el componente, pasa a tener el valor que tiene asignado en el padre
    //console.log("Leyenda", this.leyenda)
    //console.log("Porcentaje", this.porcentaje)
  }


  onChanges(newValue:number){

    if(newValue >= 100){
      this.porcentaje = 100
    }else if(newValue <= 0){
      this.porcentaje = 0
    }else{
      this.porcentaje = newValue 
    }
    
    this.txtProgress.nativeElement.value = this.porcentaje
    this.cambioValor.emit(this.porcentaje)
  }

  cambiarValor(valor:number){

    if(this.porcentaje == 100 && valor >= 0){
      this.porcentaje = 100
    }else if(this.porcentaje == 0 && valor <= 0){
      this.porcentaje = 0
    }else{
      this.porcentaje += valor
      this.cambioValor.emit(this.porcentaje)
    }
    this.txtProgress.nativeElement.focus()
  }

}
