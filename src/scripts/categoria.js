//Menu
document.addEventListener("DOMContentLoaded", () => {

  const links = document.querySelectorAll(".main-menu a");

  let currentPage = window.location.pathname.split("/")[1];

  if (currentPage === "") {
    currentPage = "index.html";
  }

  links.forEach(link => {
    const linkPage = link.getAttribute("href").split("/")[1];
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });

  document.querySelectorAll(".disponible").forEach(btn => {
    btn.addEventListener("click", () => {
      const url = btn.dataset.url;
      if (url) {
        window.location.href = url;
      }
    });
  });

});