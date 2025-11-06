import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-ui-input',
  imports: [
    FormsModule
  ],
  templateUrl: './ui-input.component.html',
  styleUrl: './ui-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UIInput),
      multi: true
    }
  ]
})
export class UIInput implements ControlValueAccessor {
  @Input() placeholder: string = '';
  value: string = '';

  // Эти функции будут предоставлены Angular Forms
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  // Вызывается когда пользователь вводит данные
  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }

  // Методы ControlValueAccessor

  // Angular записывает значение в компонент
  writeValue(value: string): void {
    this.value = value || '';
  }

  // Регистрирует callback на изменение значения
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  // Регистрирует callback на "touch" событие
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Опционально: установка disabled состояния
  setDisabledState?(isDisabled: boolean): void {
    // Реализуй если нужно
  }
}
