// scripts.js
// Load header and footer components
fetch("components/header.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("header").innerHTML = data));

fetch("components/footer.html")
  .then((response) => response.text())
  .then((data) => (document.getElementById("footer").innerHTML = data));

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

      const content = document.getElementById("content");
  
      function loadContent(page) {
          fetch(page)
            .then((response) => response.text())
            .then((data) => {
              content.innerHTML = data;
            });
        }
  
        page1Link.addEventListener("click", function (e) {
          e.preventDefault(); // Prevent the default link behavior
          loadContent("pages/projects.html");
          sidebar.classList.toggle("d-none");
        });
    });
});


