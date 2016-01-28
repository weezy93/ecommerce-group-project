$(document).ready(function (){
	console.log('sanity');

	$('#hightolow').on('click', function(){
		var imp1 = $('#imp1').detach();
		var imp2 = $('#imp2').detach();
		var imp3 = $('#imp3').detach();
		var imp4 = $('#imp4').detach();
		var imp5 = $('#imp5').detach();
		var imp6 = $('#imp6').detach();
		$('#1').html(imp1);
		$('#2').html(imp2);
		$('#3').html(imp3);
		$('#4').html(imp4);
		$('#5').html(imp5);
		$('#6').html(imp6);
	});

	$('#lowtohigh').on('click', function(){
		var imp1 = $('#imp1').detach();
		var imp2 = $('#imp2').detach();
		var imp3 = $('#imp3').detach();
		var imp4 = $('#imp4').detach();
		var imp5 = $('#imp5').detach();
		var imp6 = $('#imp6').detach();
		$('#1').html(imp6);
		$('#2').html(imp5);
		$('#3').html(imp4);
		$('#4').html(imp3);
		$('#5').html(imp2);
		$('#6').html(imp1);
	});
});


