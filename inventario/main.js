import { ingresarExistencias } from "./ingresar.js";
import { existenciasDisponibles } from "./disponibles.js";
import { esquema } from "./model.js";
import { eliminarProducto } from "./eliminar.js";

esquema();//Guarda los valores en el localStorage

function start() {
  //mostramos la cantidad de arroz disponible

  //se aumenta la cantidad de productos en 1
  let opcionIngresar = prompt("1:Mostrar la cantidad de Productos\n2:Ingresar nueva existencia de productos\n3:Eliminar existencias de producto");
  if (opcionIngresar == 1){
    existenciasDisponibles();}

  if (opcionIngresar == 2) {
    let ingresar = ingresarExistencias();
    if (ingresar == "actualizado"){
      //mostramos la cantidad de arroz disponible actualizada
      let Ver =prompt("Desea ver los datos actualizados? 1:Si\n2:No")
      if (Ver=1) {
        console.log(existenciasDisponibles());
        
      }
      }
     else{
       console.log("Ocurrio un error al actualizar");
     }
  }
  if (opcionIngresar==3){
    eliminarProducto()
    let Ver =prompt("Desea ver los datos actualizados? 1:Si\n2:No")
      if (Ver=1) {
        console.log(existenciasDisponibles());
        
      }

    
  }
   
  //   else{
  //    console.log("Gracias por usar nuestro programa");
  //  }
}

start();