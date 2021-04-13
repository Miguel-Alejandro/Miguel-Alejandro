//jquerys
$(document).ready(function(){
	$(document).tooltip();
});

//script
window.addEventListener('load', function(){

	const close_pro = document.querySelector('#close-pro');
	close_pro.addEventListener('click', function(){
		$('#card-pro').hide('normal');
	});


	const btn_pro = document.querySelector('#btn-pro');
	btn_pro.addEventListener('click', function(){
		$('#card-pro').show('normal');
	});

});