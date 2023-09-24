window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('.nav a');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach(function(section, index  ) {
        var sectionTop = window.innerHeight * index - 200; // Adjust this value to fine-tune the scroll position
        var sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            navLinks.forEach(function(navLink) {
                navLink.classList.remove('activate');
            });
            navLinks[index].classList.add('activate');
        }
    });
});
