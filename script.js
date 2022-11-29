function enviarformulario() {
let nombre= document.getElementById ("nombre").value
let Apellido= document.getElementById ("Apellido").value
let FechaN= document.getElementById ("FechaN").value
let LugarN= document.getElementById ("LugarN").value

let datosrecuperados=
document.getElementById ("datosrecuperados")

  datos.innerHTML=`
  
  El nombre capturado es: ${nombre}
  <br>
  El apellido capturado es: ${Apellido}
  `
}