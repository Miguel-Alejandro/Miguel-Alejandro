window.addEventListener('load', function(){
  const btn_pro_mobile = document.querySelector('#btn-pro-mobile');
  const close_pro_mobile = document.querySelector('#close-pro-mobile');

  const btn_basic_mobile = document.querySelector('#btn-basic-mobile');
  const close_basic_mobile = document.querySelector('#close-basic-mobile');

  const close_support_mobile = document.querySelector('#close-support-mobile');
  const btn_support_mobile = document.querySelector('#btn-support-mobile');

  const close_update_mobile = document.querySelector('#close-update-mobile');
  const btn_update_mobile = document.querySelector('#btn-update-mobile');

  const close_welcome_mobile = document.querySelector('#close-welcome-mobile');

  btn_pro_mobile.addEventListener('click', function(){
    $('#card-mobile-pro').show('normal');
  });


  close_pro_mobile.addEventListener('click', function(){
    $('#card-mobile-pro').hide('normal')
  });




  btn_basic_mobile.addEventListener('click', function(){
    $('#card-mobile-basic').show('normal');
  });

  close_basic_mobile.addEventListener('click', function(){
    $('#card-mobile-basic').hide('normal');
  });



btn_support_mobile.addEventListener('click', function(){
  $('#card-support-mobile').show('normal');
});

  close_support_mobile.addEventListener('click', function(){
    $('#card-support-mobile').hide('normal');
  });



btn_update_mobile.addEventListener('click', function(){
  $('#card-update-mobile').show('normal');
});

  close_update_mobile.addEventListener('click', function(){
    $('#card-update-mobile').hide('normal');
  });



  close_welcome_mobile.addEventListener('click', function(){
    $('#card-welcome-mobile').hide('fade');
  });

});
