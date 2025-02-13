document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("background-audio");
    
    // Obtener la posición almacenada y aplicarla
    let storedTime = localStorage.getItem("audioTime");
    if (storedTime) {
        audio.currentTime = parseFloat(storedTime);
    }

    // Reproducir automáticamente sin esperar clic
    audio.play().catch(error => console.log("Reproducción automática bloqueada"));

    // Guardar la posición del audio en tiempo real
    setInterval(() => {
        localStorage.setItem("audioTime", audio.currentTime);
    }, 500);
});

// Permitir que se inicie al hacer clic si el navegador bloquea la reproducción automática
document.addEventListener("click", function () {
    let audio = document.getElementById("background-audio");
    if (audio.paused) {
        audio.play();
    }
});

function addNumber(num) {
    const input = document.getElementById('password');
    input.value += num;
    checkPassword();
}
function clearInput() {
    document.getElementById('password').value = '';
}
function checkPassword() {
    const password = document.getElementById('password').value;
    if (password === '0494') {
        window.location.href = 'tiempo.html';
    } else if (password.length >= 4) {
        alert('Contraseña incorrecta');
        clearInput();
    }
}
function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    leaf.style.left = Math.random() * window.innerWidth + 'px';
    leaf.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.getElementById('leaves-container').appendChild(leaf);
    setTimeout(() => leaf.remove(), 5000);
}
setInterval(createLeaf, 300);
