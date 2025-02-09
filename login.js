const loginPanel = document.getElementById('login-panel');
const registerPanel = document.getElementById('register-panel');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

// Fungsi untuk berpindah ke panel Register
function showRegister() {
  loginPanel.style.display = 'none';
  registerPanel.style.display = 'block';
}

// Fungsi untuk berpindah ke panel Login
function showLogin() {
  registerPanel.style.display = 'none';
  loginPanel.style.display = 'block';
}

// Simulasi penyimpanan data user di localStorage
let users = JSON.parse(localStorage.getItem('users')) || [];

// Fungsi untuk menangani pendaftaran
registerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('register-name').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  // Cek jika email sudah terdaftar
  const userExists = users.find((user) => user.email === email);
  if (userExists) {
    alert('Email already registered!');
    return;
  }

  // Simpan user baru ke localStorage
  users.push({ name, email, password });
  localStorage.setItem('users', JSON.stringify(users));
  alert('Registration successful! You can now login.');
  showLogin();
});

// Fungsi untuk menangani login
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  // Cek jika email dan password cocok
  const user = users.find((user) => user.email === email && user.password === password);
  if (user) {
    alert(`Welcome back, ${user.name}!`);
    window.location.href = 'home.html'; // Redirect ke halaman index.html
  } else {
    alert('Invalid email or password. Please try again.');
  }
});
