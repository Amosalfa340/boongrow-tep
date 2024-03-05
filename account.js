function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle('active');
}

function hideSidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.remove('active');
}

const supabaseUrl = 'https://skyrbuelauzbedgignph.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNreXJidWVsYXV6YmVkZ2lnbnBoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk2MTY1NjQsImV4cCI6MjAyNTE5MjU2NH0.gzYzpurOFRNpFYlFzWPU9W2C23f5pttBGgnY70jmykA';
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

document.getElementById('createaccountform').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const { user, error } = await supabase.auth.signUp({ email, password });
        if (error) {
            console.error(error.message);
            return;
        }
        console.log('User signed up:', user);
        // Redirect or show success message
    } catch (error) {
        console.error('Error signing up:', error.message);
    }
});
function togglePassword() {
  var passwordField = document.getElementById("password");
  if (passwordField.type === "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
}