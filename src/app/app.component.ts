import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'angular-worker';

  constructor() {
  }

  on_init_worker() {
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(new URL('./app.worker', import.meta.url));

      worker.onmessage = ({ data }) => {
        console.log(`page got message: ${data}`);
      };

      worker.postMessage('hello');

    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }

  on_init_worker2() {
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(new URL('./app2.worker', import.meta.url));

      worker.onmessage = ({ data }) => {
        console.log(`page got message: ${data}`);
      };

      worker.postMessage('hello');

    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }

  on_saluda() {
    console.log('saluda in console!!!');
  }
  on_saluda2() {
    alert('saluda in alert!!!');
  }
}




