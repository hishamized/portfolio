
function calculateAge(){
  
  var birthDate = new Date("2001-01-22"); 
  var currentDate = new Date();
  var age = currentDate.getFullYear() - birthDate.getFullYear();

  
  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  
  document.getElementById("age").textContent = age + " years";
}

fetch("components/header.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("header").innerHTML = data));

fetch("components/footer.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("footer").innerHTML = data));

fetch("components/hero.html")
.then(response => response.text())
.then(data => document.getElementById("hero").innerHTML = data);

document.addEventListener("DOMContentLoaded", function () {
  
  fetch("components/sidebar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("sidebar").innerHTML = data;

      
      const sidebar = document.getElementById("sidebar");
      const sidebarToggle = document.getElementById("sidebarToggle");

      sidebarToggle.addEventListener("click", function () {
        sidebar.classList.toggle("d-none");
      });

      
      const page1Link = document.getElementById("page1Link");
      const page2Link = document.getElementById("page2Link");
      const page3Link = document.getElementById("page3Link");
      const page4Link = document.getElementById("page4Link");

      const navPage1Link = document.getElementById("navPage1Link");
      const navPage2Link = document.getElementById("navPage2Link");
      const navPage3Link = document.getElementById("navPage3Link");
      const navPage4Link = document.getElementById("navPage4Link");

      const content = document.getElementById("content");

      function loadContent(page) {
        fetch(page)
          .then((response) => response.text())
          .then((data) => {
            content.innerHTML = data;
            if (page === "pages/about.html") {
              console.log("We are on age");
              calculateAge();
            } 
          });
      }

      page1Link.addEventListener("click", function (e) {
        e.preventDefault(); 
        loadContent("pages/projects.html");
        sidebar.classList.toggle("d-none");
      });

      navPage1Link.addEventListener("click", function (e) {
        e.preventDefault(); 
        loadContent("pages/projects.html");
      });

      page2Link.addEventListener("click", function (e) {
        e.preventDefault(); 
        loadContent("pages/about.html");
        sidebar.classList.toggle("d-none");
      });

      navPage2Link.addEventListener("click", function (e) {
        e.preventDefault(); 
        loadContent("pages/about.html");
      });

      page3Link.addEventListener("click", function (e) {
        e.preventDefault(); 
        loadContent("pages/contact.html");
        sidebar.classList.toggle("d-none");
      });

      navPage3Link.addEventListener("click", function (e) {
        e.preventDefault(); 
        loadContent("pages/contact.html");
      });

      page4Link.addEventListener("click", function (e) {
        e.preventDefault(); 
        loadContent("pages/skills.html");
        sidebar.classList.toggle("d-none");
      });

      navPage4Link.addEventListener("click", function (e) {
        e.preventDefault(); 
        loadContent("pages/skills.html");
      });
    });
});
