import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css'],
})
export class DinamicosComponent {
  @ViewChild('miFormulario') miFormulario!: NgForm;

  guardar() {
    
      console.log('Form posteado.');
    
  }
}
