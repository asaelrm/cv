document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('modo-toggle');
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
    });

    const btnPDF = document.getElementById('descargar-pdf');
    btnPDF.addEventListener('click', () => {
        const element = document.querySelector('.cv-container');
        const opt = {
            margin: 0.2,
            filename: 'CV_LuisAsaelRosario.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().set(opt).from(element).save();
    });
});

// Cambiar color principal dinámicamente
document.querySelectorAll('.color-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const color = btn.getAttribute('data-color');
        document.documentElement.style.setProperty('--color-principal', color);
    });
});
