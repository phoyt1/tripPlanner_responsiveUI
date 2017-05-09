$('#hotel_button').on('click', function(evt){
  var $currentHotelSelected = ($( '#hotel-choices option:selected').text())
  console.log($currentHotelSelected);
  $('#hotelSelection').replaceWith('<span class="title" id="hotelSelection">' + $currentHotelSelected + '</span>');
  for (var hotelObj in hotels){
    // console.log(hotelObj);
    if (hotels[hotelObj].name === $currentHotelSelected){
      var hotelLocation = (hotels[hotelObj].place.location);
      drawMarker('hotel', hotelLocation);
      // initializeMap.drawMarker('hotel', hotelLocation);
    }
  }
  // console.log(.place.location);
})




// $( "div.second" ).replaceWith( "<h2>New heading</h2>" );

//find itinerary class

// $('#hotelSelection') = $currentHotelSelected;
