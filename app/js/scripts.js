var findMobButton = document.querySelector('.mobile-menu')
var findMenu = document.querySelector('.navigation')


  findMobButton.addEventListener('click', function(){

    findMobButton.classList.toggle('mobile-menu--active');
    findMenu.classList.toggle('is-mobile');

  });
