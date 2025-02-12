/// <reference lib="webworker" />

function fibonacci3(n: number): number {
  if (n <= 1) {
    return n;
  }
  return fibonacci3(n - 1) + fibonacci3(n - 2);
}

function procesoLargo3() {
  let cont = 0;
  for (let i = 0; i < 40; i++) {
    cont = cont + (i % 5) + (i % 2);
    // add fibonacci to cont
    cont = cont + fibonacci3(i);
    // add random int to cont
    cont = cont + Math.floor(Math.random() * 5);
  }
  return cont;

}

addEventListener('message', ({ data }) => {
  for (let i = 0; i < 10; i++) {
    postMessage(`home worker response to ${data} ${procesoLargo3()}`);
  }

});


