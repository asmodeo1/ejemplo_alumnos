const nombres = ["eva", "luis", "sergio", "sandra", "eduardo", "ernesto", "sofia", "elena", "pablo"];
const notas = [10, 5, 7, 3, 2, 7, 8, 5, 1];
const cursos = [1, 2, 1, 2, 3, 3, 1, 2, 2];

/**
 * Muestra todos los alumnos en la sección alumnos
 * @param {[String]} nombres - array con los nombres a mostrar
 * @param {[Number]} notas - array con las notas a mostrar
 * @param {[Number]} cursos - array con los cursos a mostrar
 */
function mostrarAlumnos(nombres, notas, cursos) {
    const alumnos = document.getElementById('alumnos');
    // Recorremos todos los arrays. Ponemos nombres.length porque todos los arrays
    // tienen la misma longitud (podríamos poner notas.length o cursos.length)
    for (let i = 0; i < nombres.length; i++) {
        const div = document.createElement("div");
        div.classList.add("alumno");
        const spanNombre = document.createElement("span");
        spanNombre.textContent = nombres[i];
        div.appendChild(spanNombre);
        const spanNota = document.createElement("span");
        spanNota.textContent = notas[i];
        div.appendChild(spanNota);
        const spanCurso = document.createElement("span");
        spanCurso.textContent = cursos[i];
        div.appendChild(spanCurso);
        alumnos.appendChild(div);
    }
}

function mostrarAprobados() {
    const alumnos = document.getElementsByClassName('alumno');
    for (const alumno of alumnos) {
        const nota = alumno.querySelector("span:nth-of-type(2)").textContent;
        if(nota >= 5) {
            alumno.style.display = "flex";
        } else {
            alumno.style.display = "none";
        }
        //alumno.style.display = nota >= 5 ? "flex" : "none";
    }
}

function mostrarSuspensos() {

}

function mostrarPorCurso() {

}



document.getElementById('aprobados').addEventListener("click", mostrarAprobados);
document.getElementById('suspensos').addEventListener("click", mostrarSuspensos);
document.getElementById('curso').addEventListener("change", mostrarPorCurso);


mostrarAlumnos(nombres, notas, cursos);
