// -------------Ejercicio 1------------

const countdown = (a) => {
  if (a <= 0) return;
  console.log(a);
  return countdown(a - 1);
};
countdown(1);
countdown(5);

//-----------Ejercicio 2------------

const esPalindromo = (str) => {
  let arr = str.split("");
  let reverse = arr.reverse();

  return str == reverse.join("") ? "Si es palindromo" : "No es palindromo";
};

console.log(esPalindromo("psdc"));
console.log(esPalindromo("oso"));
