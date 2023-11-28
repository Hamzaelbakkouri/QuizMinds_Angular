import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-box',
  templateUrl: './button-box.component.html',
  styleUrls: ['./button-box.component.css']
})

export class ButtonBoxComponent implements OnInit {
  @Input() text?: string;
  @Input() field?: string;
  @Output() btnClick = new EventEmitter<void>();

  ngOnInit(): void {
  }

  onClick() {
    this.btnClick.emit();
  }
}
