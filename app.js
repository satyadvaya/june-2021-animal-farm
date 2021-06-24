const catSound = document.getElementById('cat-sound');
const catImage = document.getElementById('cat-image');
catImage.addEventListener('click', () => {
    catSound.play();
});

const dogSound = document.getElementById('dog-sound');
const dogImage = document.getElementById('dog-image');
dogImage.addEventListener('click', () => {
    dogSound.play();
});

const horseSound = document.getElementById('horse-sound');
const horseImage = document.getElementById('horse-image');
horseImage.addEventListener('click', () => {
    horseSound.play();
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'c') {
        catSound.play();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'd') {
        dogSound.play();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'h') {
        horseSound.play();
    }
});