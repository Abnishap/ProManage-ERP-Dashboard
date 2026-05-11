// Login/Logout Simulation
document.addEventListener('DOMContentLoaded', function() {
  // Check if we're on the login page
  if (document.getElementById('loginForm')) {
    setupLoginForm();
  }

  // Check authentication status
  checkAuthStatus();
});

function setupLoginForm() {
  const loginForm = document.getElementById('loginForm');
  const loginMessage = document.getElementById('loginMessage');

  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    // Simple validation
    if (!username || !password) {
      showLoginMessage('Please fill in all fields', 'danger');
      return;
    }

    // Simulate authentication (in a real app, this would be an API call)
    if (username === 'admin' && password === 'password') {
      // Successful login
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userRole', role);
      localStorage.setItem('username', username);

      if (rememberMe) {
        localStorage.setItem('rememberMe', 'true');
      }

      showLoginMessage('Login successful! Redirecting...', 'success');

      // Redirect to dashboard
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1000);
    } else {
      showLoginMessage('Invalid username or password', 'danger');
    }
  });
}

function showLoginMessage(message, type) {
  const loginMessage = document.getElementById('loginMessage');
  loginMessage.innerHTML = `<div class="alert alert-${type}" role="alert">${message}</div>`;
}

function checkAuthStatus() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const currentPage = window.location.pathname;

  // If not logged in and not on login page, redirect to login
  if (!isLoggedIn && !currentPage.includes('login.html')) {
    window.location.href = 'login.html';
    return;
  }

  // If logged in and on login page, redirect to dashboard
  if (isLoggedIn && currentPage.includes('login.html')) {
    window.location.href = 'index.html';
    return;
  }

  // Auto-login if remember me was checked
  if (localStorage.getItem('rememberMe') === 'true' && !isLoggedIn) {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userRole', 'coordinator');
    localStorage.setItem('username', 'Abnisha Paudel');
  }
}

function logout() {
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('userRole');
  localStorage.removeItem('username');
  localStorage.removeItem('rememberMe');
  window.location.href = 'login.html';
}

// Make logout function global
window.logout = logout;