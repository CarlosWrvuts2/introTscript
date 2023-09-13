
interface Alumno{
    matricula:number,
    nombre:string,
    email:string,
    edad:number;
}

const alumno:Alumno={
    nombre:'carlos',
    email : '20002162@gmail.com',
    edad :23,
    matricula:20002162
}

let mascota = ['perro','gato','perico']

console.table(mascota);

mascota[1]='otro gato';
mascota.push('perico blanco')
console.table(mascota);

