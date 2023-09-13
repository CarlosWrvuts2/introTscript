

function sumar():void{
    console.log(3+7);
}

sumar()

function sumar2(a:number,b:number):number{
   return(a+b)
}

 const resultado= sumar2(4,76)
 console.log(resultado)

 interface mascota{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void;
 }

 function calcular(mascota:mascota,x:number):void{
    mascota.edad+=x;
    console.log(mascota);
 }

const nuevaMascota:mascota={
    nombre: "miau",
    edad: 2,
    mostrarEdad():void {
        console.log('la edad de la mascota es: ',this.edad);        
    },
}
calcular(nuevaMascota,3);

