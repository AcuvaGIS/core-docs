$(document).ready(function () {
  // Function to toggle the theme
  function toggleTheme() {
    const currentTheme = $("body").hasClass("theme-light") ? "theme-light" : "theme-dark";
    $("body").toggleClass("theme-light theme-dark");
    localStorage.setItem("theme", currentTheme);
  }

  // Check local storage for the theme and set it if available
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    $("body").addClass(savedTheme);
  }

  // Add click event to the theme toggle button
  $("#theme-toggle").click(function () {
    toggleTheme();
  });
});
