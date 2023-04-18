document.addEventListener('DOMContentLoaded', function() {
  let button = document.querySelector('#unicornRain');
  let container = document.querySelector('#unicornContainer');

  function launchRain() {
    for (let i = 0; i < 200; i++) {
      let unicorn = document.createElement('img');
      unicorn.setAttribute('src', 'https://api.iconify.design/fluent-emoji-flat:unicorn.svg?color=%23ffd700');
      unicorn.classList.add('w-12', 'h-auto', 'animate-unicorn');
      unicorn.style.position = 'relative';
      unicorn.style.left = Math.random() * (window.innerWidth - 100) + 'px';
      // unicorn.style.top = '80px';
      // unicorn.style.animation = 'unicorn 1s ease forwards';
      unicorn.style.animationDelay = Math.random() * 3 + 's';
      container.appendChild(unicorn);

      let rainbow = document.createElement('img');
      rainbow.setAttribute('src', 'https://api.iconify.design/fluent-emoji-flat:rainbow.svg?color=%23ffd700');
      rainbow.classList.add('w-12', 'h-auto', 'animate-unicorn');
      rainbow.style.position = 'relative';
      rainbow.style.left = Math.random() * (window.innerWidth - 100) + 'px';
      // rainbow.style.top = '100px';
      // rainbow.style.animation = 'rainbow 1s ease forwards';
      rainbow.style.animationDelay = Math.random() * 3 + 's';
      container.appendChild(rainbow);

      let star = document.createElement('img');
      star.setAttribute('src','https://api.iconify.design/iconoir:bright-star.svg?color=%23ffd700');
      star.classList.add('w-16', 'h-auto','animate-unicorn');
      star.style.position = 'relative';
      star.style.left = Math.random() * (window.innerWidth - 100) + 'px';
      // star.style.top = '50px';
      // star.style.animation = 'star 5s ease forwards';
      star.style.animationDelay = Math.random() * 3 + 's';
      container.appendChild(star);

      let cat = document.createElement('img');
      cat.setAttribute('src','https://api.iconify.design/fluent-emoji:kissing-cat.svg?color=%23ffd700');
      cat.classList.add('w-12', 'h-auto','animate-unicorn');
      cat.style.position = 'relative';
      cat.style.left = Math.random() * (window.innerWidth - 100) + 'px';
      // star.style.top = '50px';
      // star.style.animation = 'star 5s ease forwards';
      cat.style.animationDelay = Math.random() * 3 + 's';
      container.appendChild(cat);

    }
  }

  button.addEventListener('click', function() {
    launchRain();
  });

  document.addEventListener('animationend', function(event) {
    if (event.animationName === 'unicorn' || event.animationName === 'rainbow' || event.animationName === 'star' || event.animationName === 'cat') {
      event.target.remove();
    }
  });
});
