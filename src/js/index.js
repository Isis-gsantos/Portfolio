document.addEventListener('DOMContentLoaded', function () {
    const phrases = [
        "Olá! Eu sou Isis Gonçalves Santos",
        "Sou Desenvolvedora Frontend",
        "Estou em busca de oportunidades!"
    ];

    const outputElement = document.getElementById('typed-output');
    var index = 0;
    var charIndex = 0;

    function type() {
        outputElement.textContent += phrases[index][charIndex];
        charIndex++;

        if (charIndex < phrases[index].length) {
            setTimeout(type, 50);
        } else {
            setTimeout(erase, 1000); 
        }
    }

    function erase() {
        if (charIndex > 0) {
            outputElement.textContent = phrases[index].substring(0, charIndex - 1);
            charIndex--;

            setTimeout(erase, 50);
        } else {
            index = (index + 1) % phrases.length;
            setTimeout(type, 500); 
        }
    }

    type();
});

const controller = new ScrollMagic.Controller();
const elements = document.querySelectorAll('.fading');

elements.forEach((element, index) => {
    const scene = new ScrollMagic.Scene({
        triggerElement: element,
        triggerHook: 0.8, 
    })
    .on('enter', function () {
        element.classList.add('show');
        scene.off('enter');
    })
    .addTo(controller);
});
