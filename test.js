const button = document.createElement('button');
button.type = 'button';
button.textContent = 'Click me';

button.addEventListener('click', () => {
  alert('Button clicked!');
});

document.body.appendChild(button);
