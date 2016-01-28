// $(document).ready(function(){


// $('#buy').on('click', function(){


// Stripe.setPublishableKey('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

// Stripe.card.createToken({
//   number: $('#creditCard').val(),
//   cvc: $('#cvc').val(),
//   exp_month: $('#exp-month').val(),
//   exp_year: $('#exp-year').val()
// }, stripeResponseHandler);

// function stripeResponseHandler(status, response) {
//   var $form = $('#ccInfo');

//   if (response.error) {
//     // Show the errors on the form
//     $form.find('.payment-errors').text(response.error.message);
//     $form.find('button').prop('disabled', false);
//   } else {
//     // response contains id and card, which contains additional card details
//     var token = response.id;
//     // Insert the token into the form so it gets submitted to the server
//     $form.append($('<input type="hidden" name="stripeToken" />').val(token));
//     // and submit
//     $form.get(0).submit();
//   }
// }

// });

// });
