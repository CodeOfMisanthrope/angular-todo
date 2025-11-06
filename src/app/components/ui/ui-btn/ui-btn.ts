import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-ui-btn',
  imports: [],
  templateUrl: './ui-btn.html',
  styleUrl: './ui-btn.scss',
})
export class UiBtn {
  @Output() click = new EventEmitter<Event>();

  onClick(event: Event): void {
    event.stopPropagation(); // На всякий случай останавливаем всплытие
    this.click.emit(event);
  }
}
