const malla = {
  sem1: ["Matemática", "Física", "Química General", "Biología", "Expresión Oral y Escrita", "Inglés Técnico I"],
  sem2: ["Química Inorgánica", "Química Orgánica I", "Botánica", "Anatomía Humana", "Estadística", "Inglés Técnico II"],
  sem3: ["Fisicoquímica", "Química Orgánica II", "Química Analítica Cualitativa", "Fisiología", "Salud Pública e Interculturalidad", "Metodología de la Investigación"],
  sem4: ["Química Analítica Cuantitativa", "Genética", "Farmacognosia I", "Fisiopatología", "Enzimología"],
  sem5: ["Microbiología I", "Bioquímica I", "Farmacognosia II", "Bromatología", "Análisis Instrumental", "Inmunología"],
  sem6: ["Microbiología II", "Bioquímica II", "Hematología I", "Parasitología I", "Citología", "Farmacología I"],
  sem7: ["Toxicología I", "Nutrición", "Hematología II", "Parasitología II", "Tecnología Farmacéutica I", "Farmacología II", "Microbiología Industrial"],
  sem8: ["Toxicología II", "Análisis Clínico I", "Control de Medicamentos I", "Biología Molecular", "Tecnología Farmacéutica II", "Electiva"],
  sem9: ["Farmacia Clínica", "Análisis Clínico II", "Control de Medicamentos II", "Deontología y Legislación", "Gestión y Administración", "Práctica Profesional"],
  internado: ["Laboratorio", "Farmacia"]
};

// Estados posibles: aprobada, cursando, noDisponible
function mostrarSemestre(sem) {
  const materias = malla[sem];
  const lista = materias.map(m => {
    const estado = localStorage.getItem(m) || "noDisponible";
    return `<li class="materia ${estado}" onclick="cambiarEstado(this, '${m}')">${m}</li>`;
  }).join('');
  document.getElementById("info").innerHTML = `
    <h2>Materias del semestre</h2>
    <ul>${lista}</ul>
    <p style="margin-top:10px"><small>Haz clic en una materia para cambiar su estado: No disponible → Cursando → Aprobada → (y se repite)</small></p>
  `;
}

function cambiarEstado(elemento, nombre) {
  const estados = ["noDisponible", "cursando", "aprobada"];
  let actual = elemento.classList[1]; // segunda clase (estado)
  let indice = estados.indexOf(actual);
  let siguiente = estados[(indice + 1) % estados.length];

  elemento.classList.remove(actual);
  elemento.classList.add(siguiente);
  localStorage.setItem(nombre, siguiente);
}
