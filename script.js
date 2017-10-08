var input = document.getElementsByTagName("input");
    form  = document.getElementsByTagName("form");
    after = document.getElementsByClassName('after');
		title = document.getElementsByTagName('h4');

input.focus(function(){
  if( form.hasClass('open') ) return;
  form.addClass('in');
  setTimeout(function(){
    form.addClass('open');
    form.removeClass('in');
  }, 1300);
});

after.on('click', function(e){
  e.preventDefault();
  if( !form.hasClass('open') ) return;
   input.val('');
  form.addClass('close');
  form.removeClass('open');
  setTimeout(function(){
    form.removeClass('close');
  }, 1300);
})

form.submit(function(e){
  e.preventDefault();
  title.html('Thanks, high five!').addClass('show');
  form.addClass('explode');
  setTimeout(function(){
    input.val('');
    form.removeClass('explode');
    title.removeClass('show');
  }, 3000);
})
