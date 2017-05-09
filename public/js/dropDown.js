

var hotelNames = hotels.map((curr)=>{
  return curr.name;
})
for(var i =0;i<hotelNames.length;i++){
  $('#hotel-choices').append($('<option>' + hotelNames[i] + '</option>'));
}
