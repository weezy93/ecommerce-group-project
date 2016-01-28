
$(document).ready(function (){

	$('#emailSubmit').on('click', function(){

		function validateEmail(email) {
		    var valEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		    return valEmail.test(email);
		    }

		function validate(){
			var email = $('#emailInput').val();
 			if (validateEmail(email)) {
    			alert("Thank you! A Conformation email has been sent to " + email);
  			} else {
    			alert(email + " is not valid :(");
  			}
  			return false;
		}

		$("form").on("submit", validate());
		});
});