window.onload = function() {
    const lights=[
        document.getElementById('red'),
        document.getElementById('yellow'),
        document.getElementById('green'),
    ]
    document.getElementById('start').addEventListener('click', function(){
        changeLight(lights)
    });
}

let currentlight = 0;
const lights = document.querySelectorAll('.light');

function changeLight() {

    if(lights.length === 0) {
        console.error('No lights found');
        return;
    }

    // Turn off all lights
    lights.forEach(light => {
        light.classList.remove('on');
    });

    // Turn on the current light
    lights[currentlight].classList.add('on');

    // Move to the next light
    currentlight = (currentlight + 1) % lights.length;
}