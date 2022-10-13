import Students from './Students';

const student1 = new Students("Rafael", 100) 

student1.provas = [] 
student1.trabalhos = [3,4]

console.log(student1.mediaDasNotas());
console.log(student1.somaDasNotas());
