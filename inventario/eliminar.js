function eliminarProducto() {
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
    let cantidadRestar=0
    let categoria = prompt("Ingrese una categoria:Granos\nAseo\nCarne")
    switch (categoria) {
      case "Granos":
        producto=prompt("Seleccione el Producto \nArroz\nLentejas\nFrijoles")
        if (producto=="Arroz") {
          cantidadRestar=parseInt(prompt("Agregue la cantidad que desea eliminar"))
          localStorage.setItem("arroz", parseInt(arroz) - cantidadRestar);
          console.log("Arroz:",localStorage.getItem("arroz"));
  
          
        }      
        if (producto=="Lentejas") {
          cantidadSumar=parseInt(prompt("Agregue la cantidad que desea eliminar"))
          localStorage.setItem("lentejas", parseInt(lentejas) - cantidadRestar);
          console.log("Lentejas:",localStorage.getItem("lentejas"));
  
          
        }      
        if (producto=="Frijoles") {
          cantidadRestar=parseInt(prompt("Agregue la cantidad que desea eliminar"))
          localStorage.setItem("frijoles", parseInt(frijoles) - cantidadRestar);
          console.log("Frijoles:",localStorage.getItem("frijoles"));
  
          
        }      
        break;
      
      case "Aseo":
        producto=prompt("Seleccione el producto \nJabon\nLimpido\nChampu")
        if (producto=="Jabon") {
          cantidadRestar=parseInt(prompt("Agregue la cantidad que desea eliminar"))
          localStorage.setItem("jabon", parseInt(jabon) - cantidadRestar);
          console.log("Jabon:",localStorage.getItem("jabon"));
  
          
        }      
        if (producto=="Limpido") {
          cantidadRestar=parseInt(prompt("Agregue la cantidad que desea eliminar"))
          localStorage.setItem("limpido", parseInt(limpido) - cantidadRestar);
          console.log("Limpido:",localStorage.getItem("limpido"));
  
          
        }      
        if (producto=="Champu") {
          cantidadRestar=parseInt(prompt("Agregue la cantidad que desea eliminar"))
          localStorage.setItem("frijoles", parseInt(champu) - cantidadRestar);
          console.log("Champu:",localStorage.getItem("champu"));
  
          
        }    
        break
  
      case "Carne":
        producto=prompt("Seleccione el producto \nPescado\nRes\nCerdo")
        if (producto=="Pescado") {
          cantidadRestar=parseInt(prompt("Agregue la cantidad que desea eliminar"))
          localStorage.setItem("pescado", parseInt(pescado) - cantidadRestar);
          console.log("Pescado:",localStorage.getItem("pescado"));
  
          
        }      
        if (producto=="Res") {
          cantidadRestar=parseInt(prompt("Agregue la cantidad que desea eliminar"))
          localStorage.setItem("res", parseInt(res) - cantidadRestar);
          console.log("Res:",localStorage.getItem("res"));
  
          
        }      
        if (producto=="Cerdo") {
          cantidadRestar=parseInt(prompt("Agregue la cantidad que desea eliminar"))
          localStorage.setItem("cerdo", parseInt(cerdo) - cantidadRestar);
          console.log("Cerdo:",localStorage.getItem("cerdo"));
  
          
        }    
        break
  
      case "Lacteos":
        producto=prompt("Seleccione el producto \nYogurt\nLeche\nKumis")
        if (producto=="Yogurt") {
          cantidadRestar=parseInt(prompt("Agregue la cantidad que desea eliminar"))
          localStorage.setItem("yogurt", parseInt(yogurt) - cantidadRestar);
          console.log("Yogurt:",localStorage.getItem("yogurt"));
  
          
        }      
        if (producto=="Leche") {
          cantidadRestar=parseInt(prompt("Agregue la cantidad que desea eliminar"))
          localStorage.setItem("leche", parseInt(leche) - cantidadRestar);
          console.log("Leche:",localStorage.getItem("leche"));
  
          
        }      
        if (producto=="Kumis") {
          cantidadRestar=parseInt(prompt("Agregue la cantidad que desea eliminar"))
          localStorage.setItem("kumis", parseInt(kumis) - cantidadRestar);
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
  
  export {eliminarProducto};