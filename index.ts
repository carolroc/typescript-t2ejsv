// Import stylesheets
import { Greeter } from './greeter';
import './style.css';

//Declaração de contantes
const pi = 3.14;

//Declaração Let
let myVar1 = 12;
let myString: string = 'oi';
let notSure: any = 'qualquer coisa';

//Declarando void
function aviso(): void {
  console.log('oioioioi');
}
aviso();

//Declarando funções
function getFullName(pessoa: { name: string; lastName: string }): string {
  return pessoa.name + ' ' + pessoa.lastName;
}

let p = { name: 'Ana', lastName: 'Rocha' };
console.log(getFullName(p));

//Utilizando Console
console.log('oi gente');

//Declarando arrays
let list: Number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Utilizando laços e condicionais
for (let i = 0; i <= 10; i++) {
  if (list[i] % 2 == 0) {
    console.log(list[i] + ' é par');
  }
}

//Laços de repetição
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//Condicional
if (myVar1 >= 20) {
  console.log(myVar1 + ' é maior');
} else {
  console.log(myVar1 + ' é menor');
}

//Declarando tipos enumeraods
enum Color {
  red,
  green,
  blue,
}
let c: Color = Color.green;

enum ColorWithReferences {
  red = 1,
  green = 2,
  blue = 3,
}
let c2: ColorWithReferences = ColorWithReferences.green;


//Utilizando laços e condicionais
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i + ' é par teste 2');
  }
}
let counter = 0;
let intervalo = setInterval(() => {
  counter += 1;
  const counterDiv: HTMLElement = document.getElementById('counterDiv');
  counterDiv.innerHTML = 'contador: ' + counter;
}, 10000);

let title: string = 'titulozinho';
let paragrafo: string = 'texto trexto texto texto';

//Utilizando classe externa
let saudacao = new Greeter('saudacao oi');

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>${title}</h1>
<p>${paragrafo}</p>
<div id='counterDiv'></div>
</br>
<button id='appButton' onclick='alertIsMethod()'> BOTÃO </button>
</br>
<div>${saudacao.getGlitter()}</div>`;

//Declarando uma função para ser invocada por um evento -> coloca dps do botão
const btn = document.getElementById('appButton');
btn?.addEventListener('click', alertIsMethod);
function alertIsMethod(this: HTMLElement, ev: Event) {
  alert('alertaaaaaaa');
}
