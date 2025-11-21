document.addEventListener('DOMContentLoaded', () => {
    // Menu mobilne
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    // Płynne przewijanie (dla starszych przeglądarek)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Prosta obsługa formularza (wymaga podpięcia Formspree)
    const form = document.getElementById('myForm');
    const status = document.getElementById('form-status');

    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            const data = new FormData(e.target);
            
            fetch(e.target.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    status.innerHTML = "Dziękuję za wiadomość! Skontaktuję się wkrótce.";
                    status.style.color = "green";
                    form.reset();
                } else {
                    status.innerHTML = "Wystąpił błąd. Spróbuj ponownie później.";
                    status.style.color = "red";
                }
            }).catch(error => {
                status.innerHTML = "Wystąpił błąd połączenia.";
                status.style.color = "red";
            });
        });
    }
});
