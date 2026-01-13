/* LOGIN */
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

/* PUBLISH */
function publish() {
  const article = {
    title: document.getElementById("title").value,
    image: document.getElementById("image").value,
    source: document.getElementById("source").value,
    content: document.getElementById("content").value,
    date: new Date().toLocaleDateString()
  };

  const articles = JSON.parse(localStorage.getItem("articles")) || [];
  articles.unshift(article);
  localStorage.setItem("articles", JSON.stringify(articles));

  window.location.href = "index.html";
}

/* LOAD ARTICLES */
const container = document.getElementById("articles");
if (container) {
  const articles = JSON.parse(localStorage.getItem("articles")) || [];

  articles.forEach(a => {
    container.innerHTML += `
      <article class="card">
        <img src="${a.image}">
        <div class="card-content">
          <h2>${a.title}</h2>
          <p>${a.content}</p>
          <span>${a.source} · ${a.date}</span>
        </div>
      </article>
    `;
  });
}
