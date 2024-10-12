const Tareainput = document.querySelector("#input")
const btnAgregar = document.querySelector("#agregar")
const pendientes = document.querySelector("#contenedor-tareas")
const ListaId = document.querySelector("#lista-id")
const ListaTareas = document.querySelector("#lista-tareas")
const totalTareas = document.querySelector("#total")
const totalRealizadas = document.querySelector("#realizadas")
const tareas= []
var contadorRealizadas = 0

agregar = () =>{
    let agregarTarea = {id: Date.now(), nombre: Tareainput.value, completado: false} 
    if(agregarTarea.nombre === ""){
        return
    }
    else{ 
        tareas.push(agregarTarea)
    }
    input.value=""
    render()
}
render = () => {
    let elementoUno = ""
    let elementoDos = "" 
    
    for(let tarea of tareas){
        elementoUno+= `<li>${tarea.id}</li>`
        elementoDos+= `<li>${tarea.nombre} 
        <input type="checkbox" id="${tarea.id}" class="checkbox" onchange="checkStatus(${tarea.id}) " />
        <button class="btn-eliminar" onclick="eliminar(${tarea.id})">X</button></li> `

    }
    ListaId.innerHTML= elementoUno
    ListaTareas.innerHTML= elementoDos
    
}

 checkStatus= (e) => {
    const checkbox = document.getElementById(e);
    if(checkbox.checked) {
        tareas.completado = true   
      }else 
      { tareas.completado = false   
    }
    if(tareas.completado ===true){
        contadorRealizadas++
        totalRealizadas.innerHTML = `Realizadas:${contadorRealizadas}`
    }else if(tareas.completado ===false){
        contadorRealizadas--
        totalRealizadas.innerHTML = `Realizadas:${contadorRealizadas}`
    }

}


eliminar = (id) =>{
    const index = tareas.findIndex((e) => e.id == id)
    tareas.splice(index, 1)
    contadorTareas()
    render()
}

        
contadorTareas = () => {
    const contadorObjetos = tareas.length;
    totalTareas.innerHTML = `Total Pendientes:${contadorObjetos}`;
}

btnAgregar.addEventListener("click", () =>{
   agregar()
   contadorTareas()
 })

