//jquerys
$(document).ready(function(){
	$(document).tooltip();
});

//script
window.addEventListener('load', function(){

	//funciones del paquete pro
	const close_pro = document.querySelector('#close-pro');
	close_pro.addEventListener('click', function(){
		$('#card-pro').hide('normal');
	});


	const btn_pro = document.querySelector('#btn-pro');
	btn_pro.addEventListener('click', function(){
		$('#card-pro').show('normal');
	});


//funciones del paquete basico
	const close_basic = document.querySelector('#close-basic');
	close_basic.addEventListener('click', function(){
			$('#card-basic').hide('normal');
	});

	const btn_basic = document.querySelector('#btn-basic');
	btn_basic.addEventListener('click', function(){
		$('#card-basic').show('normal');
	});


	//funciones para el Soporte
	const close_support = document.querySelector('#close-support');
	close_support.addEventListener('click', function(){
		$('#card-support').hide('normal');
	});


	const btn_support = document.querySelector('#btn-support');
	btn_support.addEventListener('click', function(){
		$('#card-support').show('normal');
	});



	//funciones para Actualizaciones
	const close_update = document.querySelector('#close-update');
	close_update.addEventListener('click', function() {
		$('#card-update').hide('normal');
	});


	const btn_update = document.querySelector('#btn-update');
	btn_update.addEventListener('click', function(){
		$('#card-update').show('normal');
	});

});


//interacciones de las ventanas
$(document).ready(function(){
	$('#card-pro').draggable();
	$('#card-basic').draggable();
	$('#card-support').draggable();
	$('#card-update').draggable();
});
