function factorial(n) {
  let ans = 1;

  for (let i = 1; i <= n; i++) {
    ans = multiplicar(ans, i);
  }

  return ans;
}

function multiplicar(a, b) {
  let resultado = 0;

  for (let i = 0; i < b; i++) {
    resultado += a;
  }

  return resultado;
}

console.log(factorial(5));
