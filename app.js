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
   PROTECTION DASHBOARD
========================= */
if (window.location.pathname.includes("dashboard.html")) {
  if (localStorage.getItem("connected") !== "true") {
    window.location.href = "login.html";
  }
}

/* =========================
   PUBLISH ARTICLE
========================= */
function publish() {
  const title = document.getElementById("title").value;
  const image = document.getElementById("image").value;
  const source = document.getElementById("source").value;
  const content = document.getElementById("content").value;

  if (!title || !image || !content) {
    alert("Merci de remplir tous les champs obligatoires");
    return;
  }

  const article = {
    title,
    image,
    source,
    content,
    date: new Date().toLocaleDateString()
  };

  const articles = JSON.parse(localStorage.getItem("articles")) || [];
  articles.unshift(article);
  localStorage.setItem("articles", JSON.stringify(articles));

  window.location.href = "index.html";
}

/* =========================
   LOAD ARTICLES (ACCUEIL)
========================= */
const container = document.getElementById("articles");

if (container) {
  const articles = JSON.parse(localStorage.getItem("articles")) || [];

  if (articles.length === 0) {
    container.innerHTML = "<p>Aucun article publié pour le moment.</p>";
  }

  articles.forEach(a => {
    container.innerHTML += `
      <div class="card">
        <img src="${a.image}" alt="">
        <div class="card-content">
          <h2>${a.title}</h2>
          <p>${a.content}</p>
          <span>${a.source || "SEE"} · ${a.date}</span>
        </div>
      </div>
    `;
  });
}
