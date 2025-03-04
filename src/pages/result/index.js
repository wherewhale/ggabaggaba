const params = new URLSearchParams(window.location.search);
document.getElementById('score').textContent = params.get('score') || 0;
