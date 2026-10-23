document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cloudForm');
  const alertBox = document.getElementById('statusAlert');
  const card = document.querySelector('.cloud-card');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('devName').value.trim();
    const email = document.getElementById('devEmail').value.trim();
    const role = document.getElementById('cloudRole').value;

    if (!name || !email || !role) {
      alertBox.className = 'alert alert-danger py-2 px-3 small';
      alertBox.textContent = 'Error: Sabhi fields fill karein!';
      alertBox.classList.remove('d-none');
      return;
    }

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