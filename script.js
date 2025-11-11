let salarioTexto = prompt("ingrese el salario bruto:");

         let salario = parseFloat(salarioTexto);

         if (isNaN(salario) || salario <= 0) {
           alert(" Por favor ingrese un número válido"); }
     else 
        {
          let salud = salario * 0.04;
          let pension = salario * 0.04;
          let retencion = 0;

      if (salario >= 4000000) {
        retencion = salario * 0.05;
        alert("Aplica retención del 5%.");
    } 
      else
         {
        alert("No aplica retención en la fuente.");
      }

         let salarioNeto = salario - salud - pension - retencion;

         let mensaje = "RESULTADO\n";
      mensaje += "Salario Bruto: " + salario + "\n";
      mensaje += "Descuento Salud (4%): " + salud + "\n";
      mensaje += "Descuento Pensión (4%): " + pension + "\n";
      mensaje += "Retención: " + retencion + "\n";
      mensaje += "Salario Neto: " + salarioNeto;

      alert(mensaje);
    }