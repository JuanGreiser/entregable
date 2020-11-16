// cosas por hacer y cosas hechas
// un array de las cosas hechas
// otro donde estan las cosas por hacer
//fechas
//[todo] poder ingresar las cosas
//poder consultar las cosas por hacer y las cosas hechas




// la tarea
// -> nombre y descripcion
//-> fecha
//-> estado



//operaciones

// - ver todas las tareas
//- ver las tareas completadas
//-ver las tareas pendientes


const fs = require("fs")
const path = require("path")


const absoultePath = path.join(__dirname, "tasks.json")

const tasksJSON = fs.readFileSync(absoultePath , {encoding:"utf-8"})

const tasks = JSON.parse(tasksJSON)


function showAll(){ 
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
       
    console.log(`* [${task.done ? "Hecho" : "pendiente"}] ${task.name} (${task.deadline})`) 
}
}

function showDone(){
     for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i]
        if (task.done){
           console.log(`* [${task.done ? "Hecho" : "pendiente"}] ${task.name} (${task.deadline})`) 
        }
    }
}  


function showPending(){
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks [i];
        if(task.done == false)
        console.log(`* [${task.done ? "Hecho" : "pendiente"}] ${task.name} (${task.deadline})`) 
    }

}

const param = process.argv[2];

switch (param) {
  case "all":
    showAll();
    break;
  case "done":
    showDone();
    break;
  case "pending":
    showPending();
    break;
  default:
    console.log("Los parametros aceptados son: 'all', 'done' y 'pending'");
}

