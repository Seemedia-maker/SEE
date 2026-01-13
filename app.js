/* LOGIN */
function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  if (user === "admin" && pass === "see2026") {
    localStorage.setItem("connected", "true");
    window.location.href = "dashboard.html"; // ✅ PAGE QUI DOIT EXISTER
  } else {
    document.getElementById("error").innerText = "Accès refusé";
  }
}

/* LOAD ARTICLES */
const container = document.getElementById("articles");
if (container) {
  const articles = JSON.parse(localStorage.getItem("articles")) || [];

  articles.forEach(a => {
    container.innerHTML += `
      <article class="card">
        <img src="${a.image}">
        <h2>${a.title}</h2>
        <p>${a.content}</p>
        <span>${a.date}</span>
      </article>
    `;
  });
}
