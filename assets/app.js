 const navbar = document.getElementById('navbar');
const toggleBtn = document.getElementById('toggleBtn');
const showBtn = document.getElementById('showBtn');
toggleBtn.addEventListener('click', () => {
    navbar.classList.add('hidden');
});
showBtn.addEventListener('click', () => {
    navbar.classList.remove('hidden');
});