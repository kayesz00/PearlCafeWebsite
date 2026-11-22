const form = document.getElementById("bookingForm");

if(form){

form.addEventListener("submit", function(event){

event.preventDefault();

alert(
"Thank you! Your reservation request has been received."
);

});

}