const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');
const contentSections = document.querySelectorAll('.content-section')
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-links') && !e.target.closest('.menu-btn')) {
        navLinks.classList.remove('active');
    }
})
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navItems.forEach(nav => nav.classList.remove('active'));
        item.classList.add('active')
        const sectionId = item.getAttribute('data-section');
        contentSections.forEach(section => {
            section.classList.remove('active');
            if (section.id === sectionId) {
                section.classList.add('active');
            }
        })
        navLinks.classList.remove('active');
    });
})
const texts = [
    "SISWA SMK AL ITTIHAD",
    "PENGEMBANGAN WEB",
    "fokus membangun website modern dan responsif"
]

let speed = 100;

const textElements = document.querySelector(".typewriter-text")

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if(charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText() {
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1)
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter,500)
    }
}

window.onload = typeWriter;


document.addEventListener("DOMContentLoaded", () => {
  const detailBtn = document.getElementById("detail-btn");
  const backBtn = document.getElementById("back-btn");
  const detailSection = document.getElementById("project-detail");
  const mainSections = document.querySelectorAll(".content-section:not(#project-detail)");

  // Tombol DETAIL
  detailBtn.addEventListener("click", () => {
    // Sembunyikan semua section lain
    mainSections.forEach(section => {
      section.style.display = "none";
    });

    // Tampilkan section detail
    detailSection.style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Tombol KEMBALI
  backBtn.addEventListener("click", () => {
    // Sembunyikan detail section
    detailSection.style.display = "none";

    // Tampilkan semua section lain kecuali detail
    mainSections.forEach(section => {
      section.style.display = "block";
    });

    // Scroll ke bagian Project
    const projectSection = document.getElementById("projects");
    projectSection.scrollIntoView({ behavior: "smooth" });
  });
});

// Simpan jumlah kunjungan di localStorage
  let count = localStorage.getItem("visitCount") || 0;
  count++;
  localStorage.setItem("visitCount", count);

  // Tampilkan di footer
  document.getElementById("visitCount").textContent = count;

  // HANDLE CONTACT FORM SEND EMAIL
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.send("service_vy2dd7l", "template_fcgh2a4", {
        name: this.name.value,
        email: this.email.value,
        message: this.message.value
    })
    .then(() => {
        alert("Pesan berhasil dikirim!");
        this.reset();
    }, (error) => {
        console.error("Gagal mengirim pesan:", error);
        alert("Terjadi kesalahan, coba lagi nanti.");
    });
});
