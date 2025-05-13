let currentLight = 0;
const redLight = document.getElementById('red');
const yellowLight = document.getElementById('yellow');
const greenLight = document.getElementById('green');

function changeLight() {
    // Turn off all lights
    redLight.classList.remove('on');
    yellowLight.classList.remove('on');
    greenLight.classList.remove('on');

    // Turn on the current light based on currentLight
    switch (currentLight) {
        case 0:
            redLight.classList.add('on');
            break;
        case 1:
            yellowLight.classList.add('on');
            break;
        case 2:
            greenLight.classList.add('on');
            break;
        default:
            console.error('Invalid light index:', currentLight);
            return;
    }

    // Move to the next light
    currentLight = (currentLight + 1) % 3;
}

document.getElementById('start').addEventListener('click', changeLight);