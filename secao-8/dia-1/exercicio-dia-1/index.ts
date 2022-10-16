import Students from './Students';
import Person from './Person';

// const student1 = new Students("Rafael", 100) 

// student1.provas = [] 
// // student1.traba.prettierrclhos = [3,4]

// console.log(student1.mediaDasNotas());
// console.log(student1.somaDasNotas());


const jenifer = new Person('Jenifer', new Date('1990-01-01'));
console.log(jenifer);
console.log(jenifer.name);
console.log(jenifer.birthDate);
const rafael = new Person('Rafael', new Date('2000-11-29'));

console.log(rafael);
console.log(rafael.name);
console.log(rafael.birthDate);

const novo = new Students('jeje', new Date('2000-11-17'));
console.log(novo);

const eu1 = new Students('Rafael', new Date('2000-11-29'));
console.log(eu1);
console.log(eu1.matricula);

