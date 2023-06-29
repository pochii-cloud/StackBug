import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-display-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display-message.component.html',
  styleUrls: ['./display-message.component.css']
})
export class DisplayMessageComponent {
  @Input() message!: string|null;
  @Output() close!:(new () => EventEmitter<void>) 

  closeMessage() {
    this.message = null;
  }
}
