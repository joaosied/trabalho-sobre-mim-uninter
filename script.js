// observa onde que o usuario esta na pagina com o id das section e de acordo com a observação muda 
// o comportamento da barra de navegação, mudando a estilização do texto com ajuda 
// da classe .active declarada no css

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove("active"));
        const id = entry.target.getAttribute("id");
        document
          .querySelector(`.nav-link[href="#${id}"]`)
          .classList.add("active");
      }
    });
  },
  { threshold: 0.6 }
);

sections.forEach((section) => observer.observe(section));
