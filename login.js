function toggleSidebar() {
      var sidebar = document.getElementById("sidebar");
      sidebar.classList.toggle('active');
    }

    function hideSidebar() {
      var sidebar = document.getElementById("sidebar");
      sidebar.classList.remove('active');
    }
function togglePassword() {
  var passwordField = document.getElementById("password");
  if (passwordField.type === "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
}