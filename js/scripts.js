// scripts.js
function calculateAge(){
  // Calculate age
  var birthDate = new Date("2001-01-22"); // Replace with your birthdate in the 'YYYY-MM-DD' format
  var currentDate = new Date();
  var age = currentDate.getFullYear() - birthDate.getFullYear();

  // Check if the birthday hasn't occurred this year yet
  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  // Display the age in the "Introduction" section
  document.getElementById("age").textContent = age + " years";
}
// Load header and footer components
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
  // Load sidebar content
  fetch("components/sidebar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("sidebar").innerHTML = data;

      // Now that the sidebar content is loaded, add the event listener
      const sidebar = document.getElementById("sidebar");
      const sidebarToggle = document.getElementById("sidebarToggle");

      sidebarToggle.addEventListener("click", function () {
        sidebar.classList.toggle("d-none");
      });

      // Load the default page
      const page1Link = document.getElementById("page1Link");
      const page2Link = document.getElementById("page2Link");
      const page3Link = document.getElementById("page3Link");
      const page4Link = document.getElementById("page4Link");

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
        e.preventDefault(); // Prevent the default link behavior
        loadContent("pages/projects.html");
        sidebar.classList.toggle("d-none");
      });

      page2Link.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the default link behavior
        loadContent("pages/about.html");
        sidebar.classList.toggle("d-none");
      });

      page3Link.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the default link behavior
        loadContent("pages/contact.html");
        sidebar.classList.toggle("d-none");
      });

      page4Link.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent the default link behavior
        loadContent("pages/skills.html");
        sidebar.classList.toggle("d-none");
      });
    });
});
