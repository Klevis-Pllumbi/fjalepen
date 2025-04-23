function toggleMenu() {
    document.querySelector(".menu").classList.toggle("open");
}

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});

function redirectTo(page) {
    window.location.href = page;
}

function searchAuthor() {
    let input = document.getElementById('search').value.toLowerCase();
    let authors = document.querySelectorAll('.author-card');

    authors.forEach(function (author) {
        let name = author.querySelector('span').textContent.trim().toLowerCase();

        if (name.includes(input)) {
            author.style.display = "";
        } else {
            author.style.display = "none";
        }
    });
}