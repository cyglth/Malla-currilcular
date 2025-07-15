const malla = {
  sem1: [
    "Matemática", "Física", "Química General", "Biología",
    "Expresión Oral y Escrita", "Inglés Técnico I"
  ],
  sem2: [
    "Química Inorgánica", "Química Orgánica I", "Botánica", 
    "Anatomía Humana", "Estadística", "Inglés Técnico II"
  ],
  sem3: [
    "Fisicoquímica", "Química Orgánica II", "Química Analítica Cualitativa",
    "Fisiología", "Salud Pública e Interculturalidad", "Metodología de la Investigación"
  ],
  sem4: [
    "Química Analítica Cuantitativa", "Genética", "Farmacognosia I",
    "Fisiopatología", "Enzimología"
  ],
  sem5: [
    "Microbiología I", "Bioquímica I", "Farmacognosia II",
    "Bromatología", "Análisis Instrumental", "Inmunología"
  ],
  sem6: [
    "Microbiología II", "Bioquímica II", "Hematología I",
    "Parasitología I", "Citología", "Farmacología I"
  ],
  sem7: [
    "Toxicología I", "Nutrición", "Hematología II",
    "Parasitología II", "Tecnología Farmacéutica I",
    "Farmacología II", "Microbiología Industrial"
  ],
  sem8: [
    "Toxicología II", "Análisis Clínico I", "Control de Medicamentos I",
    "Biología Molecular", "Tecnología Farmacéutica II", "Electiva"
  ],
  sem9: [
    "Farmacia Clínica", "Análisis Clínico II", "Control de Medicamentos II",
    "Deontología y Legislación", "Gestión y Administración", "Práctica Profesional"
  ],
  internado: [
    "Laboratorio", "Farmacia"
  ]
};

function mostrarSemestre(sem) {
  const materias = malla[sem];
  const lista = materias.map(m => `<li>${m}</li>`).join('');
  document.getElementById("info").innerHTML = `
    <h2>Materias del semestre</h2>
    <ul>${lista}</ul>
  `;
}
