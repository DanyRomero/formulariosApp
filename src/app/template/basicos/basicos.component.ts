import { Component, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  
})
export class BasicosComponent {
  @ViewChild('miFormulario') miFormulario!: NgForm;
  initForm = {
    producto : 'producto0',
    precio: 10,
    existencias: 10,
  }

  /*  guardar(miFormualrio: NgForm){ */
  guardar() {
    console.log(this.miFormulario);
    this.miFormulario.resetForm({precio: 0, existencias: 0})
  }

  nombreValido(): boolean {
    return (
      this.miFormulario?.controls['producto']?.invalid &&
      this.miFormulario?.controls['producto']?.touched
    );
  }

  precioValido(): boolean {
    return (
      this.miFormulario?.controls['precio']?.value < 0 &&
      this.miFormulario?.controls['precio']?.touched
    );
  }
}
