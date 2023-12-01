document.addEventListener("DOMContentLoaded", function () {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");

  window.addEventListener("scroll", function () {
    let currentScroll = window.scrollY;

    sections.forEach((section) => {
      let sectionTop = section.offsetTop - 150;
      let sectionBottom = sectionTop + section.offsetHeight;

      if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
        // Hapus kelas 'active' dari semua link navigasi
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });

        // Temukan link yang sesuai dengan bagian yang sedang terlihat dan tambahkan kelas 'active'
        let sectionId = section.getAttribute("id");
        let correspondingLink = document.querySelector(`header nav a[href="#${sectionId}"]`);

        if (correspondingLink) {
          correspondingLink.classList.add("active");
        }
      }
    });
  });
});
