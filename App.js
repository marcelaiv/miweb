document.write("<h1>hola mundo</h1>");
console.log([1, 2, 3]);
console.log ({"username":"ryan",
"score":70.4});

var nombredelusuario ="MARCELA";
let  apellido = "CAMBINDO";

nombredelusuario = "IVANA";

console.log(nombredelusuario);


let nombrecompleto = nombredelusuario + " " + apellido;
console.log(nombrecompleto);

let passwordd = "ivana123";

let input = "ivana123";
let result = input == "ivana123";

if( result === true){
    console.log (" login correcto");

}else{
    console.log("contraseña incorrecta");
}

let score = 80;

if  (score > 30 )   {
    console.log("debes practicar mas")

}

else if ( score = 50)  {
    console.log("estas mejorando")
}

else{
    console.log("Debes mirar un tutorial")
}

let typeCard = "targeta debito";
switch(typeCard)    {
    case "targeta debito":
        console.log("esta es una targeta debito")
        break;
    case "targeta credito":
        console.log("esta es una targeta debito")
        break;
        default:
            console.log("no tienes una targeta")



}

let contar = 50;
while(contar> 0 )   {
    console.log(contar)
    contar = contar -1;

}

let names = ["john","bryan","cesar"]
   
        for(let x = names.length - 1; x >= 0; x--) {
            console.log(names[x]);

        }
        function saludar(personas ) {
            console.log( " HOLA COMO ESTAS "  + personas);

        }
        saludar("Diana");
        saludar("Marcos");
        saludar("Fernando");
        saludar("Paula");
        saludar("kara");
        
        
            function sumar(n1,n2 ) {
                console.log(n1+n2)
        }
        sumar(3,2);
        sumar(1500,1500);
        sumar(9,66);
        sumar(300,200);

        document.write(" HOLA!!!")