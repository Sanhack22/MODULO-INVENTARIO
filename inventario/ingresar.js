
//esta función solo aumenta en 1 la cantidad de arroz
//SE DEBE IMPLEMENTAR PARA QUE AUMENTE CUALQUIER CANTIDAD DE
//CUALQUIER PRODUCTO DE CUALQUIER CATEGORÍA
function ingresarExistencias() {
  //se recupera la cantidad de existencias del arroz
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

  let producto="";
  let cantidadSumar=0
  let categoria = prompt("Ingrese una categoria:Granos\nAseo\nCarne")
  switch (categoria) {
    case "Granos":
      producto=prompt("Seleccione el Producto \nArroz\nLentejas\nFrijoles")
      if (producto=="Arroz") {
        cantidadSumar=parseInt(prompt("Agregue la cantidad que desea agregarle"))
        localStorage.setItem("arroz", parseInt(arroz) + cantidadSumar);
        console.log("Arroz:",localStorage.getItem("arroz"));

        
      }      
      if (producto=="Lentejas") {
        cantidadSumar=parseInt(prompt("Agregue la cantidad que desea agregarle"))
        localStorage.setItem("lentejas", parseInt(lentejas) + cantidadSumar);
        console.log("Lentejas:",localStorage.getItem("lentejas"));

        
      }      
      if (producto=="Frijoles") {
        cantidadSumar=parseInt(prompt("Agregue la cantidad que desea agregarle"))
        localStorage.setItem("frijoles", parseInt(frijoles) + cantidadSumar);
        console.log("Frijoles:",localStorage.getItem("frijoles"));

        
      }      
      break;
    
    case "Aseo":
      producto=prompt("Seleccione el producto \nJabon\nLimpido\nChampu")
      if (producto=="Jabon") {
        cantidadSumar=parseInt(prompt("Agregue la cantidad que desea agregarle"))
        localStorage.setItem("jabon", parseInt(jabon) + cantidadSumar);
        console.log("Jabon:",localStorage.getItem("jabon"));

        
      }      
      if (producto=="Limpido") {
        cantidadSumar=parseInt(prompt("Agregue la cantidad que desea agregarle"))
        localStorage.setItem("limpido", parseInt(limpido) + cantidadSumar);
        console.log("Limpido:",localStorage.getItem("limpido"));

        
      }      
      if (producto=="Champu") {
        cantidadSumar=parseInt(prompt("Agregue la cantidad que desea agregarle"))
        localStorage.setItem("frijoles", parseInt(champu) + cantidadSumar);
        console.log("Champu:",localStorage.getItem("champu"));

        
      }    
      break

    case "Carne":
      producto=prompt("Seleccione el producto \nPescado\nRes\nCerdo")
      if (producto=="Pescado") {
        cantidadSumar=parseInt(prompt("Agregue la cantidad que desea agregarle"))
        localStorage.setItem("pescado", parseInt(pescado) + cantidadSumar);
        console.log("Pescado:",localStorage.getItem("pescado"));

        
      }      
      if (producto=="Res") {
        cantidadSumar=parseInt(prompt("Agregue la cantidad que desea agregarle"))
        localStorage.setItem("res", parseInt(res) + cantidadSumar);
        console.log("Res:",localStorage.getItem("res"));

        
      }      
      if (producto=="Cerdo") {
        cantidadSumar=parseInt(prompt("Agregue la cantidad que desea agregarle"))
        localStorage.setItem("cerdo", parseInt(cerdo) + cantidadSumar);
        console.log("Cerdo:",localStorage.getItem("cerdo"));

        
      }    
      break

    case "Lacteos":
      producto=prompt("Seleccione el producto \nYogurt\nLeche\nKumis")
      if (producto=="Yogurt") {
        cantidadSumar=parseInt(prompt("Agregue la cantidad que desea agregarle"))
        localStorage.setItem("yogurt", parseInt(yogurt) + cantidadSumar);
        console.log("Yogurt:",localStorage.getItem("yogurt"));

        
      }      
      if (producto=="Leche") {
        cantidadSumar=parseInt(prompt("Agregue la cantidad que desea agregarle"))
        localStorage.setItem("leche", parseInt(leche) + cantidadSumar);
        console.log("Leche:",localStorage.getItem("leche"));

        
      }      
      if (producto=="Kumis") {
        cantidadSumar=parseInt(prompt("Agregue la cantidad que desea agregarle"))
        localStorage.setItem("kumis", parseInt(kumis) + cantidadSumar);
        console.log("Kumis:",localStorage.getItem("kumis"));

        
      }    
      break
    default: return "error"
      break;
  }
  //se actualiza la cantidad de existencias del arroz sumando una
  // localStorage.setItem("arroz", parseInt(cantidad) + 1);
  return "actualizado";
}

export {ingresarExistencias};