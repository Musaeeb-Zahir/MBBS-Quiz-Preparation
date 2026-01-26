const subjects = [
  { name: "Anatomy", desc: "Human body structure and organization", q: 850, t: 45, tag: "Mixed", class: "anatomy" },
  { name: "Physiology", desc: "Functions and mechanisms of living systems", q: 720, t: 38, tag: "Mixed", class: "physiology" },
  { name: "Biochemistry", desc: "Chemical processes within living organisms", q: 640, t: 34, tag: "Mixed", class: "biochemistry" },
  { name: "Pathology", desc: "Study of disease causes and effects", q: 780, t: 42, tag: "Mixed", class: "pathology" },
  { name: "Pharmacology", desc: "Drug actions and their effects", q: 690, t: 36, tag: "Mixed", class: "pharmacology" },
  { name: "Microbiology", desc: "Study of microorganisms", q: 580, t: 31, tag: "Mixed", class: "microbiology" },
  { name: "Medicine", desc: "Diagnosis and treatment of diseases", q: 920, t: 48, tag: "Advanced", class: "medicine" },
  { name: "Surgery", desc: "Surgical procedures and techniques", q: 840, t: 44, tag: "Advanced", class: "surgery" },
  { name: "OB/GYN", desc: "Obstetrics and Gynecology", q: 760, t: 40, tag: "Advanced", class: "obgyn" }
];

const grid = document.getElementById('subjectGrid');
const searchInput = document.getElementById('subjectSearch');

function renderSubjects(filter = "") {
  grid.innerHTML = "";
  const filtered = subjects.filter(s => s.name.toLowerCase().includes(filter.toLowerCase()));
  
  filtered.forEach(sub => {
      grid.innerHTML += `
          <div class="card ${sub.class}">
              <h2>${sub.name}</h2>
              <p class="desc">${sub.desc}</p>
              <div class="card-stats">
                  <span><i class="fa-regular fa-copy"></i> ${sub.q} questions</span>
                  <span><i class="fa-regular fa-rectangle-list"></i> ${sub.t} tests</span>
              </div>
              <span class="tag">${sub.tag}</span>
          </div>
      `;
  });
}

searchInput.addEventListener('input', (e) => renderSubjects(e.target.value));

// Initial Load
renderSubjects();