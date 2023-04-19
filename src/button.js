const button = document.querySelector('#unicornRain');
const container = document.querySelector('#unicornContainer');

function launchRain() {
  for (let i = 0; i < 200; i++) {
    const icons = ['https://api.iconify.design/fluent-emoji-flat:unicorn.svg?color=%23ffd700', 'https://api.iconify.design/fluent-emoji-flat:rainbow.svg?color=%23ffd700', 'https://api.iconify.design/iconoir:bright-star.svg?color=%23ffd700', 'https://api.iconify.design/fluent-emoji:kissing-cat.svg?color=%23ffd700'];
    
    const iconIndex = Math.floor(Math.random() * icons.length);
    const icon = icons[iconIndex];

    const img = document.createElement('img');
    img.setAttribute('src', icon);
    img.classList.add('w-12', 'h-auto', 'animate-unicorn');
    img.style.position = 'absolute';
    img.style.left = Math.random() * (window.innerWidth - 100) + 'px';
    img.style.top = Math.random() * (window.innerHeight - 100) + 'px';
    img.style.animation = 'unicorn 1s ease forwards';
    img.style.animationDelay = Math.random() * 3 + 's';

    container.appendChild(img);
  }
}

button.addEventListener('click', launchRain);

container.addEventListener('animationend', function(event) {
  event.target.remove();
});
