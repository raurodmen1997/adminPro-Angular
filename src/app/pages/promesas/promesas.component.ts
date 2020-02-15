import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    //resolve, función que se va a llamar cuando se ejecuta correctamente la promesa, no hay ningún error.
    //reject, función que se va a llamar cuando ocurre algún error.
    let promesa = new Promise( (resolve, reject) =>{

      let contador = 0;

      let intervalo = setInterval(()=>{

        contador +=1;
        console.log(contador)

        //Lo mismo ocurre para el reject
        if(contador === 3){
          resolve('OK!!');
          //resolve();
          clearInterval(intervalo);
        }


      }, 1000);

    });

    promesa.then(
      mensaje => console.log("Termimó!", mensaje))
      //mensaje => console.log("Termimó!"))
      .catch(
        (error)=>console.error("Error", error)
        );


   }

  ngOnInit() {
  }

}
