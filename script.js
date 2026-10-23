document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cloudForm');
  const alertBox = document.getElementById('statusAlert');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('devName').value.trim();
    const email = document.getElementById('devEmail').value.trim();
    const role = document.getElementById('cloudRole').value;

    if (!name || !email || !role) {
      showMessage('Error: Please fill all configuration parameters.', 'danger');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      showMessage('Error: Invalid email format.', 'warning');
      return;
    }

    // Success response
    showMessage(`Access Granted! Welcome ${name} to ${role} node.`, 'success');
    form.reset();
  });

  function showMessage(text, type) {
    alertBox.className = `alert alert-${type} py-2 px-3 small`;
    alertBox.textContent = text;
    alertBox.classList.remove('d-none');

    setTimeout(() => {
      alertBox.classList.add('d-none');
    }, 4000);
  }
});