let currentLight = 0;
const lights = document.querySelectorAll('.light');

function changeLight() {
    if (lights.length === 0) {
        console.error('No lights found');
        return;
    }

    // Turn off all lights
    lights.forEach(light => {
        light.classList.remove('on');
    });

    // Turn on the current light
    lights[currentLight].classList.add('on');

    // Move to the next light
    currentLight = (currentLight + 1) % lights.length;
}

document.getElementById('start').addEventListener('click', changeLight);