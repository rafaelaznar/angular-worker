// admin.login.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css'],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class ControlComponent {
  errorMessage: string | null = null;

  constructor() { }


}