

$('#hotel_button').on('click', function(evt){
  var $currentHotelSelected = ($( '#hotel-choices option:selected').text())
  console.log($currentHotelSelected);
  $('#hotelSelection').replaceWith('<span class="title" id="hotelSelection">' + $currentHotelSelected + '</span>');
  for (var hotelObj in hotels){

    if (hotels[hotelObj].name === $currentHotelSelected){
      var hotelLocation = (hotels[hotelObj].place.location);
      console.log('Hello: ', drawMarker('hotel', hotelLocation));
    }
  }
})


$('#restaurants_button').on('click', function(evt){
  var $currentRestaurantSelected = ($( '#restaurant-choices option:selected').text())
  console.log($currentRestaurantSelected);
  $('#restaurantSelection').append('<span class="title" id="restaurantSelection">' + $currentRestaurantSelected + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button><br />');
  for (var restaurantObj in restaurants){

    if (restaurants[restaurantObj].name === $currentRestaurantSelected){
      var restaurantLocation = (restaurants[restaurantObj].place.location);
      drawMarker('restaurant', restaurantLocation);
    }
  }
})

$('#activities_button').on('click', function(evt){
  var $currentActivitySelected = ($( '#activity-choices option:selected').text())
  console.log($currentActivitySelected);
  $('#activitySelection').append('<span class="title" id="activitySelection">' + $currentActivitySelected + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button><br />');
  for (var activityObj in activities){

    if (activities[activityObj].name === $currentActivitySelected){
      var activityLocation = (activities[activityObj].place.location);
      drawMarker('activity', activityLocation);

    }
  }

})
