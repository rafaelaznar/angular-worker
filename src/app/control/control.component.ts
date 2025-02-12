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


  on_init_worker() {
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(new URL('../workers/app.worker', import.meta.url));

      worker.onmessage = ({ data }) => {
        console.log(`page got message: ${data}`);
      };

      worker.postMessage('hello from control component!!');

      worker.onerror = (error) => {
        console.error('Error in Web Worker:', error.message);
      };

    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }

}