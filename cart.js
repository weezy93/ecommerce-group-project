var animalObject = [
		{
		name: "Smiling Egg",
		amount: 0,
		price: 12,
		size: "large"
		},

		{
		name: "cat-icorn",
		amount: 0,
		price: 47,
		size: "tiny"
		},

		{
		name: "Green Monster",
		amount: 0,
		price: 370,
		size: "tiny"
		},

		{
		name: "Mr. Confused",
		amount: 0,
		price: 60,
		size: "tiny"
		},

		{
		name: "Agatha",
		amount: 0,
		price: 9.99,
		size: "tiny"
		},

		{
		name: "Jeff",
		amount: 0,
		price: 25,
		size: "tiny"
		}
	];

	console.log(animalObject);


$(document).ready(function (){

	if (window.localStorage.length === 0){
		localStorage.setItem('animals', JSON.stringify(animalObject));
	}

	if (window.localStorage.length > 0){
		var obj = JSON.parse(localStorage.getItem('animals'));
		$('#receipt').text('');
		var cart = 0;
		var total = 0;
		for (var i = 0; i < obj.length; i++) {
			if (obj[i].amount > 0) {
				$('#receipt').append('<tr class="warning"><td>' + obj[i].name + '</td><td>' + obj[i].amount + '</td><td> $' + (obj[i].price * obj[i].amount) + '</td></tr>' );
			}
			$('#totals').text('$ '+ (total += (obj[i].price * obj[i].amount)));
			$('#cart').text('( '+ (cart += obj[i].amount) +' )');
			}
	}

	$('#egg').on('click', function(){
		var obj = JSON.parse(localStorage.getItem('animals'));
		obj[0].amount++;
		// for (var i = 0; i < obj.length; i++) {
		// 	if (obj[i].amount > 0) {
		// 	$('#receipt').append('<tr class="warning"><td>' + obj[i].name + '</td><td>' + obj[i].amount + '</td><td> $' + (obj[i].price * obj[i].amount) + '</td></tr>' );
		// 	}
		// 	$('#totals').text(total += (obj[i].price * obj[i].amount));
		// }
		localStorage.setItem('animals', JSON.stringify(obj));
	});

	$('#cat').on('click', function(){
		$('#receipt').text('');
	});

	$('#monster').on('click', function(){
		$('#receipt').text('');
	});

	$('#red').on('click', function(){
		$('#receipt').text('');
	});

	$('#elephant').on('click', function(){
		$('#receipt').text('');
	});

	$('#panda').on('click', function(){
		$('#receipt').text('');
	});



});

