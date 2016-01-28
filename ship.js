$(document).ready(function(){

var checkNum = 1;
	$('#checkbox').on('click', function(form){
		if (checkNum % 2 !== 0){
			$('#billName').val($('#shipName').val());
			$('#billLine1').val($('#shipLine1').val());
			$('#billLine2').val($('#shipLine2').val());
			$('#billCity').val($('#shipCity').val());
			$('#billState').val($('#shipState').val());
			$('#billZip').val($('#shipZip').val());
			$('#billCountry').val($('#shipCountry').val());
			$('#billPhone').val($('#shipPhone').val());
		} else {
			$('#billName').val('');
			$('#billLine1').val('');
			$('#billLine2').val('');
			$('#billCity').val('');
			$('#billState').val('');
			$('#billZip').val('');
			$('#billCountry').val('');
			$('#billPhone').val('');
		}
		checkNum ++;
	});
});