import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  emailPattern,
  nombreApellidoPattern,
  noPuedeSerStrider,
} from 'src/app/shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  constructor(private fb: FormBuilder, private vs: ValidatorService) {}

  miFormulario = this.fb.group({
    nombre: [
      '',
      [Validators.required, Validators.pattern(this.vs.nombreApellidoPattern)],
    ],
    email: [
      '',
      [Validators.required, Validators.pattern(this.vs.emailPattern)],
    ],
    username: ['', [Validators.required, this.vs.noPuedeSerStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmar: ['', [Validators.required]],
  }, {
    validators: [this.vs.camposIguales('password', 'confirmar')]
  });

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Dany Romero',
      email: 'test1@test.com',
      username: 'Danyrp45',
    });
  }

  campoNoValido(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    );
  }

  submitFormulario() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }
}
