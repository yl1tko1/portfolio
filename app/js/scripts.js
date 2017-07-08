var findMobButton = document.querySelector('.mobile-menu')
var findMenu = document.querySelector('.navigation')


  findMobButton.addEventListener('click', function(){

    findMobButton.classList.toggle('mobile-menu--active');
    findMenu.classList.toggle('is-mobile');

  });


$(document).ready(function(){

function toggleWorks () {

var findWorks = $(document).find('.portfol');
var worksItem = findWorks.find('li');
var contentBlock = $(document).find('.content');
var activeTitle = findWorks.find('li.portfol--active');

worksItem.on('click', function(){
  $(document).find('.portfol--active').removeClass('portfol--active');
  $(this).toggleClass('portfol--active').find('b').replaceAll($('.content h2'));

  // ищем
  // activeTitle.find('b').replaceAll($('.content h2'));
  return toggleWorks();

});

}

toggleWorks();

});
