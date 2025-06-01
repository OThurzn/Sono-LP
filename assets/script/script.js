document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('contrastBtn');

    btn.addEventListener('click', function () {
        document.body.classList.toggle('high-contrast');
    });
});
