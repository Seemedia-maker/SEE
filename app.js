/* =========================
   AUTH CHECK
========================= */
const isConnected = localStorage.getItem("connected") === "true";

/* =========================
   LOGIN
========================= */
function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  if (user === "admin" && pass === "see2026") {
    localStorage.setItem("connected", "true");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText = "Accès refusé";
  }
}

/* =========================
   PUBLISH
========================= */
function publish() {
  const article = {
    title: title.value,
    image: image.value,
    source: source.value,
    content: content.value,
    date: new Date().toLocaleDateString()
  };

  const articles = JSON.parse(localStorage.getItem("articles")) || [];
  articles.unshift(article);
  localStorage.setItem("articles", JSON.stringify(articles));

  window.location.href = "index.html";
}

/* =========================
   DELETE
========================= */
function deleteArticle(index) {
  if (!confirm("Supprimer cet article ?")) return;

  const articles = JSON.parse(localStorage.getItem("articles")) || [];
  articles.splice(index, 1);
  localStorage.setItem("articles", JSON.stringify(articles));
  location.reload();
}

/* =========================
   EDIT
========================= */
function editArticle(index) {
  localStorage.setItem("editIndex", index);
  window.location.href = "dashboard.html";
}

/* =========================
   LOAD ARTICLES
========================= */
const container = document.getElementById("articles");

if (container) {
  const articles = JSON.parse(localStorage.getItem("articles")) || [];

  articles.forEach((a, i) => {
    container.innerHTML += `
      <article class="card fade-in">
        <img src="${a.image}">
        <div class="card-content">
          <h2>${a.title}</h2>
          <p>${a.content}</p>
          <span>${a.source} · ${a.date}</span>

          ${isConnected ? `
          <div class="admin-actions">
            <button onclick="editArticle(${i})">✏️ Modifier</button>
            <button onclick="deleteArticle(${i})">🗑 Supprimer</button>
          </div>` : ""}
        </div>
      </article>
    `;
  });
}

