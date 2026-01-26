const subjects = [
  { id: 1, name: "Anatomy", description: "Human body structure & systems" },
  { id: 2, name: "Physiology", description: "Functions of body systems" },
  { id: 3, name: "Biochemistry", description: "Molecular basis of life" },
  { id: 4, name: "Pathology", description: "Disease mechanisms" },
  { id: 5, name: "Pharmacology", description: "Drugs and therapeutics" },
  { id: 6, name: "Microbiology", description: "Microorganisms & infections" }
];

const grid = document.getElementById("subjectGrid");

subjects.forEach(subject => {
  const card = document.createElement("div");
  card.className = "subject-card";
  card.innerHTML = `
    <h3>${subject.name}</h3>
    <p>${subject.description}</p>
    <a href="#" class="link">Start Test →</a>
  `;
  grid.appendChild(card);
});
