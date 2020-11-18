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


const ruta = path.join(__dirname, "tasks.json")

const tasksJSON = fs.readFileSync(ruta , {encoding:"utf-8"})

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


function toggle(taskIndex) {
  const task = tasks[taskIndex];
  task.done = !task.done; //esta es la tarea que quiero editar
  showAll();
  save();
}

function add(name, deadline) {
  const newtask = {
    name: name,
    deadline: deadline,
    done: false,
  };
  tasks.push(newtask);
  showAll();
  save();
}

function save() {
  const tasksJSON = JSON.stringify(tasks, null, 2); 
  fs.writeFileSync(ruta, tasksJSON);
}

const argumentoArray = process.argv; //argumenos vector
const tercerParametro = argumentoArray[2];
const cuartoParametro = argumentoArray[3];
const quintoParametro = argumentoArray[4];



switch (tercerParametro) {
  case "all":
    showAll();
    break;
  case "done":
    showDone();
    break;
  case "pending":
    showPending();
    break;
    case "toggle":
      toggle(cuartoParametro);
    break;
    case "add":
      add(cuartoParametro, quintoParametro)
  default:
    console.log("Los parametros aceptados son: 'all', 'done' y 'pending'");
}

