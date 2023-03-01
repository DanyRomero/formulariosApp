import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  miFormulario: FormGroup= this.fb.group( {
    nombre : ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Shakira', Validators.required], ['DuaLipa', Validators.required]
    ], Validators.required)
  })


  nuevoFavorito:FormControl= this.fb.control('', Validators.required)
  constructor( private fb: FormBuilder){}


  campoValido(campo: string){
    return (this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched)
  }

  agregarFavorito(){
   if( this.nuevoFavorito.invalid){
    return
  }

  this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value, Validators.required))
  this.nuevoFavorito.reset()
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return
    }

    console.log('HOLA',this.miFormulario.value)
  }

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray
  }

}
