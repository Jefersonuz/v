let tasks = [];
let continueManaging = true
while (continueManaging) {
    let action = prompt("¿Qué desea hacer? (agregar, listar, eliminar, salir):")
    
    switch (action) {
        case 'agregar':
            let task = prompt("Ingrese la nueva tarea:")
            tasks.push(task);
            console.log("Tarea agregada.")
            break;
        case 'listar':
            console.log("Lista de tareas:");
            tasks.forEach((t, index) => console.log(index + 1 + ". " + t))
            break;
        case 'eliminar':
            let taskIndex = parseInt(prompt("Ingrese el número de la tarea a eliminar:")) - 1
            if (taskIndex >= 0 && taskIndex < tasks.length) {
                tasks.splice(taskIndex, 1);
                console.log("Tarea eliminada.")
            } else {
                console.log("Número de tarea no válido.")
            }
            break;
        case 'salir':
            continueManaging = false
            break
        default:
            console.log("Acción no válida.")
            break
    }
}