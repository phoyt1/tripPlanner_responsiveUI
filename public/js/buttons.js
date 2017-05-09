$('#hotel_button').on('click', function(evt){
  var $currentHotelSelected = ($( '#hotel-choices option:selected').text())
  console.log($currentHotelSelected);
  $('#hotelSelection').replaceWith('<span class="title" id="hotelSelection">' + $currentHotelSelected + '</span>');
})

// $( "div.second" ).replaceWith( "<h2>New heading</h2>" );

//find itinerary class

// $('#hotelSelection') = $currentHotelSelected;
