import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  emailPattern,
  nombreApellidoPattern,
  noPuedeSerStrider,
} from 'src/app/shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
})
export class RegistroComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private vs: ValidatorService,
    private emailValidator: EmailValidatorService
  ) {}

  miFormulario = this.fb.group(
    {
      nombre: [
        '',
        [
          Validators.required,
          Validators.pattern(this.vs.nombreApellidoPattern),
        ],
      ],
      email: [
        '',
        [Validators.required, Validators.pattern(this.vs.emailPattern)],
        this.emailValidator.validate,
      ],
      username: ['', [Validators.required, this.vs.noPuedeSerStrider]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmar: ['', [Validators.required]],
    },
    {
      validators: [this.vs.camposIguales('password', 'confirmar')],
    }
  );

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Dany Romero',
      email: 'test1@test.com',
      username: 'Danyrp45',
      password: '123456',
      confirmar: '123456',
    });
  }

  campoNoValido(campo: string) {
    return (
      this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
    );
  }

  submitFormulario() {
    this.miFormulario.markAllAsTouched();
  }

  emailRequired() {
    return (
      this.miFormulario.get('email')?.errors?.['required'] &&
      this.miFormulario.get('email')?.touched
    );
  }

  emailFormato() {
    return (
      this.miFormulario.get('email')?.errors?.['pattern'] &&
      this.miFormulario.get('email')?.touched
    );
  }
  emailTomado() {
    return (
      this.miFormulario.get('email')?.errors?.['emailTomado'] &&
      this.miFormulario.get('email')?.touched
    );
  }
}
