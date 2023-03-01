import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';

  miFormulario = this.fb.group({
    nombre: [
      '',
      [Validators.required, Validators.pattern(this.nombreApellidoPattern)],
    ],
    email: [''],
  });

  constructor(private fb: FormBuilder) {}

  campoNoValido(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    );
  }

  submitFormulario(){
    console.log(this.miFormulario.value)
    this.miFormulario.markAllAsTouched();
  }
}
