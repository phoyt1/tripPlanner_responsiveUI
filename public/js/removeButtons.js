


// $('#hotel_button').on('click', function(evt){
//   var $currentHotelSelected = ($( '#hotel-choices option:selected').text())
//   console.log($currentHotelSelected);
//   $('#hotelSelection').replaceWith('<span class="title" id="hotelSelection">' + $currentHotelSelected + '</span>');
//   for (var hotelObj in hotels){

//     if (hotels[hotelObj].name === $currentHotelSelected){
//       var hotelLocation = (hotels[hotelObj].place.location);
//       drawMarker('hotel', hotelLocation);
//     }
//   }
// })


$('.deleteHotel').on('click', function(evt){

  $(this).prev()[0].textContent = '';
  hotelMarkers[0].setMap(null);

});


$('#restaurantSelection').on('click', '.deleteRestaurant',function(evt){
  console.log(restaurants);
  $(this).prev()[0].textContent = '';
  restaurantMarkers[0].setMap(null);

});
