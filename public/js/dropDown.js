

var hotelNames = hotels.map((curr)=>{
  return curr.name;
})
for(var i =0;i<hotelNames.length;i++){
  $('#hotel-choices').append($('<option>' + hotelNames[i] + '</option>'));
}

var restaurantNames = restaurants.map((curr)=>{
  return curr.name;
})
for(var i =0;i<restaurantNames.length;i++){
  $('#restaurant-choices').append($('<option>' + restaurantNames[i] + '</option>'));
}

var activityNames = activities.map((curr)=>{
  return curr.name;
})
for(var i =0;i<activityNames.length;i++){
  $('#activity-choices').append($('<option>' + activityNames[i] + '</option>'));
}
