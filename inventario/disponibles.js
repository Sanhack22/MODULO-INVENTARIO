//esta función solo muestra la cantidad de arroz disponible
//SE DEBE IMPLEMENTAR PARA QUE MUESTRE TODAS LAS EXISTENCIAS
//DISPONIBLES DE TODOS LOS PRODUCTOS 
function existenciasDisponibles() {
  let arroz=localStorage.getItem("arroz");
  let lentejas=localStorage.getItem("lentejas")
  let frijoles=localStorage.getItem("frijoles")
  let jabon=localStorage.getItem("jabon",)
  let limpido=localStorage.getItem("limpido")
  let champu=localStorage.getItem("champu")
  let pescado=localStorage.getItem("pescado")
  let res = localStorage.getItem("res")
  let cerdo =localStorage.getItem("cerdo")

  let yogurt=localStorage.getItem("yogurt")
  let leche=localStorage.getItem("leche")
  let kumis=localStorage.getItem("kumis")

 return console.log("Arroz:",arroz," ","Lentejas:",lentejas," ","Jabon:",jabon," ","Frijoles:",frijoles," ","Limpido:",limpido," ","Champu:",champu," ","Pescado:",pescado," ","Res:",res," ","Cerdo:",cerdo)
}

export {existenciasDisponibles};


import { servicio } from "./servicio.js";
import { animalito } from "./servicio.js";
import { veteri } from "./servicio.js";
import {empleadoBaño} from "./empleados.js"
import {empleadoPelu} from "./empleados.js"
import {empleadoVete} from "./empleados.js"
import {fecha} from "./fecha.js"



let precio=0
let animales=""
let empleado=""

function main() 
    let servicio2 = servicio();
   
    switch (servicio2) {
        case "Baño":
            animales=animalito()

            if (animales="Perro") {
                precio=30
                break
            }
            if (animales="Gato") {
                precio=60
                break
            }
            //empleado=empleadoBaño()
                         
            
            
            break;
        case "Peluqueria":
            animales =animalito()
            if (animales="Perro") {
                precio=90
            }

            if (animales="Perro") {
                precio=20
            }
           // empleado=empleadoPelu()
        
            break;
        case "Veterinaria":
            //let vete=veteri()
            //empleado=empleadoVete()
        break
    }
    let fechas=fecha()
        
     

main()