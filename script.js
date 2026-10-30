document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cloudForm');
  const alertBox = document.getElementById('statusAlert');
  const card = document.querySelector('.cloud-card');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('devName').value.trim();
    const email = document.getElementById('devEmail').value.trim();
    const role = document.getElementById('cloudRole').value;
    const password = document.getElementById('devPassword').value;
    if (!name || !email || !role || !password) {
      alertBox.className = 'alert alert-danger py-2 px-3 small';
      alertBox.textContent = 'Error: fill all details!';
      alertBox.classList.remove('d-none');
      return;
    }

    // LocalStorage se check aur save karna
    let users = JSON.parse(localStorage.getItem('cloud_users')) || [];
    const existingUser = users.find(u => u.email === email);

    if (existingUser) {
      if (existingUser.password !== password) {
        alertBox.className = 'alert alert-danger py-2 px-3 small';
        alertBox.textContent = 'Error: wrong password! Enter correct password.';
        alertBox.classList.remove('d-none');
        return;
      }
    } else {
      users.push({ name, email, role, password });
      localStorage.setItem('cloud_users', JSON.stringify(users));
    }

    alertBox.classList.add('d-none');
    

    // Success Screen Render
    card.innerHTML = `
      <div class="text-center py-3">
        <div class="mb-3">
          <span style="font-size: 3rem;">🚀</span>
        </div>
        <h4 class="text-success fw-bold">Access Provisioned!</h4>
        <p class="text-secondary small mb-4">Cloud environment configuration ready.</p>
        
        <div class="text-start bg-dark p-3 rounded mb-3 border border-secondary font-monospace small">
          <p class="mb-1 text-info">> Engineer: <span class="text-light">${name}</span></p>
          <p class="mb-1 text-info">> Email: <span class="text-light">${email}</span></p>
          <p class="mb-1 text-info">> Cluster: <span class="text-warning">${role}</span></p>
          <p class="mb-0 text-success">> Status: Active Node (Online)</p>
        </div>

        <button onclick="location.reload()" class="btn btn-outline-info w-100 btn-sm">Provision Another Node</button>
      </div>
    `;
  });
});
