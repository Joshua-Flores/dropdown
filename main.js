document.querySelector('.dropdown button').addEventListener('click', (e) => {
  const menu = e.target.parentElement.children[1];
  menu.classList.toggle('visible');
});

document.querySelector('.dropdown button').addEventListener('focusout', (e) => {
  const menu = e.target.parentElement.children[1];
  if (menu.classList.contains('visible')) {
    menu.classList.remove('visible');
  }
});
