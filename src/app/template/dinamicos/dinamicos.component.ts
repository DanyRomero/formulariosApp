import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css'],
})
export class DinamicosComponent {
  @ViewChild('miFormulario') miFormulario!: NgForm;

  nuevoArtista: string = '';
  persona: Persona = {
    nombre: 'Dany',
    favoritos: [
      {
        id: 1,
        nombre: 'Shakira',
      },
      {
        id: 2,
        nombre: 'Dua Lipa',
      },
    ],
  };

  agregar(){
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre : this.nuevoArtista
    }
    this.persona.favoritos.push({...nuevoFavorito})
    this.nuevoArtista = '';
  }
  eliminar(i: number){
    this.persona.favoritos.splice(i, 1)
  }
  guardar() {
    console.log('Form posteado.');
  }
}
