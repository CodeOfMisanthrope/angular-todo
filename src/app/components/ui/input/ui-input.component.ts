import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './ui-input.component.html',
  styleUrl: './ui-input.component.scss',
})
export class UIInput {
  @Input() formControlName!: string;
}
