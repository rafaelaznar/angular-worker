/// <reference lib="webworker" />

function fibonacci2(n: number): number {
  if (n <= 1) {
    return n;
  }
  return fibonacci2(n - 1) + fibonacci2(n - 2);
}

function procesoLargo2() {
  let cont = 0;
  for (let i = 0; i < 40; i++) {
    cont = cont + (i % 5) + (i % 2);
    // add fibonacci to cont
    cont = cont + fibonacci2(i);
    // add random int to cont
    cont = cont + Math.floor(Math.random() * 5);
  }
  return cont;

}

addEventListener('message', ({ data }) => {
  for (let i = 0; i < 10; i++) {
    postMessage(`worker 2 response to ${data} ${procesoLargo2()}`);
  }

});

//  You cannot inject an Angular service into a worker. 