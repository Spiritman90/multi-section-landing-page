function initMap () {
  const loc = {lat: 6.558040, lng:3.327780};
  const map = new google.maps.Map(document.querySelector('.map')
  ,{
     zoom: 14,
     center:loc
  });
  const marker =  new google.maps.Marker({position: loc, map: map  });
}