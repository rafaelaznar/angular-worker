/// <reference lib="webworker" />

function fibonacci(n: number): number {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function procesoLargo() {
  let cont = 0;
  for (let i = 0; i < 40; i++) {
    cont = cont + (i % 5) + (i % 2);
    // add fibonacci to cont
    cont = cont + fibonacci(i);
    // add random int to cont
    cont = cont + Math.floor(Math.random() * 5);
  }
  return cont;

}

addEventListener('message', ({ data }) => {
  for (let i = 0; i < 10; i++) {
    postMessage(`app worker response to ${data} ${procesoLargo()}`);
  }

});


