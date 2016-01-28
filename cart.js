//inventory list
var animalObject = [
		{
		name: "SmilingEgg",
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
		name: "GreenMonster",
		amount: 0,
		price: 370,
		size: "tiny"
		},

		{
		name: "Confused",
		amount: 0,
		price: 60,
		size: "tiny"
		},

		{
		name: "Agatha",
		amount: 0,
		price: 10,
		size: "tiny"
		},

		{
		name: "Jeff",
		amount: 0,
		price: 25,
		size: "tiny"
		}
	];


$(document).ready(function (){

	//if first load, set animalObject to localStorage
	if (window.localStorage.length === 0){
		localStorage.setItem('animals', JSON.stringify(animalObject));
	}

	//PUPULATE RECEIPT
	//POPULATE CART BUTTON
	if (window.localStorage.length > 0){
		var obj = JSON.parse(localStorage.getItem('animals'));
		$('#receipt').text('');
		var cart = 0;
		var total = 0;
		for (var i = 0; i < obj.length; i++) {
			if (obj[i].amount > 0) {
				$('#receipt').append('<tr class="warning"><td>' + obj[i].name + '</td><td>' + obj[i].amount + '</td><td> $' + (obj[i].price * obj[i].amount) + '</td><td><button id="del'+obj[i].name+'" class="btn btn-default">Remove 1</button></td></tr>' );
			}
			$('#totals').text('$ '+ (total += (obj[i].price * obj[i].amount)));
			$('#itemAmount').text('( '+ (cart += obj[i].amount) +' )');
			}
	}

	//POPULATE LOCAL STORAGE on CLICK
	$('#egg').on('click', function(){
		var obj = JSON.parse(localStorage.getItem('animals'));
		obj[0].amount++;
		var cart = 0;
		localStorage.setItem('animals', JSON.stringify(obj));
		for (var i = 0; i < obj.length; i++) {
			$('#itemAmount').text('( '+ (cart += obj[i].amount) +' )');
		}
	
	});

	$('#cat').on('click', function(){
		var obj = JSON.parse(localStorage.getItem('animals'));
		obj[1].amount++;
		var cart = 0;
		localStorage.setItem('animals', JSON.stringify(obj));
		for (var i = 0; i < obj.length; i++) {
			$('#itemAmount').text('( '+ (cart += obj[i].amount) +' )');
		}
	});

	$('#monster').on('click', function(){
		var obj = JSON.parse(localStorage.getItem('animals'));
		obj[2].amount++;
		var cart = 0;
		localStorage.setItem('animals', JSON.stringify(obj));
		for (var i = 0; i < obj.length; i++) {
			$('#itemAmount').text('( '+ (cart += obj[i].amount) +' )');
		}
	});

	$('#red').on('click', function(){
		var obj = JSON.parse(localStorage.getItem('animals'));
		obj[3].amount++;
		var cart = 0;
		localStorage.setItem('animals', JSON.stringify(obj));
		for (var i = 0; i < obj.length; i++) {
			$('#itemAmount').text('( '+ (cart += obj[i].amount) +' )');
		}
	});

	$('#elephant').on('click', function(){
		var obj = JSON.parse(localStorage.getItem('animals'));
		obj[4].amount++;
		var cart = 0;
		localStorage.setItem('animals', JSON.stringify(obj));
		for (var i = 0; i < obj.length; i++) {
			$('#itemAmount').text('( '+ (cart += obj[i].amount) +' )');
		}
	});

	$('#panda').on('click', function(){
		var obj = JSON.parse(localStorage.getItem('animals'));
		obj[5].amount++;
		var cart = 0;
		localStorage.setItem('animals', JSON.stringify(obj));
		for (var i = 0; i < obj.length; i++) {
			$('#itemAmount').text('( '+ (cart += obj[i].amount) +' )');
		}
	});

	//REMOVE ITEMS


	$('#delSmilingEgg').on('click', function(){
		var obj = JSON.parse(localStorage.getItem('animals'));
		obj[0].amount--;
		console.log(obj);
		var cart = 0;
		localStorage.setItem('animals', JSON.stringify(obj));
		for (var i = 0; i < obj.length; i++) {
			$('#itemAmount').text('( '+(cart += obj[i].amount) +' )');
		}
	});

	$('#delGreenMonster').on('click', function(){
		var obj = JSON.parse(localStorage.getItem('animals'));
		obj[2].amount--;
		console.log(obj);
		var cart = 0;
		localStorage.setItem('animals', JSON.stringify(obj));
		for (var i = 0; i < obj.length; i++) {
			$('#itemAmount').text('( '+(cart += obj[i].amount) +' )');
		}
	});

	$('#delcat-icorn').on('click', function(){
		var obj = JSON.parse(localStorage.getItem('animals'));
		obj[1].amount--;
		console.log(obj);
		var cart = 0;
		localStorage.setItem('animals', JSON.stringify(obj));
		for (var i = 0; i < obj.length; i++) {
			$('#itemAmount').text('( '+(cart += obj[i].amount) +' )');
		}
	});

	$('#delConfused').on('click', function(){
		var obj = JSON.parse(localStorage.getItem('animals'));
		obj[3].amount--;
		console.log(obj);
		var cart = 0;
		localStorage.setItem('animals', JSON.stringify(obj));
		for (var i = 0; i < obj.length; i++) {
			$('#itemAmount').text('( '+(cart += obj[i].amount) +' )');
		}
	});

	$('#delAgatha').on('click', function(){
		var obj = JSON.parse(localStorage.getItem('animals'));
		obj[4].amount--;
		console.log(obj);
		var cart = 0;
		localStorage.setItem('animals', JSON.stringify(obj));
		for (var i = 0; i < obj.length; i++) {
			$('#itemAmount').text('( '+(cart += obj[i].amount) +' )');
		}
	});

	$('#delJeff').on('click', function(){
		var obj = JSON.parse(localStorage.getItem('animals'));
		obj[5].amount--;
		console.log(obj);
		var cart = 0;
		localStorage.setItem('animals', JSON.stringify(obj));
		for (var i = 0; i < obj.length; i++) {
			$('#itemAmount').text('( '+(cart += obj[i].amount) +' )');
		}
	});
});

