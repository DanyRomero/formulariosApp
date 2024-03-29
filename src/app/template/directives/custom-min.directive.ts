import { Directive, Input } from '@angular/core';
import { Validator, FormControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[customMin] [ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CustomMinDirective,
      multi: true,
    },
  ],
})
export class CustomMinDirective implements Validator {
  @Input() minimo!: number;
  constructor() {}

  validate(control: FormControl) {
    let inputValue = control.value;

    return inputValue < this.minimo ? { customMin: true } : null;
  }
}
