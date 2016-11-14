function getArtistsAdapter(){
  event.preventDefault();
  var artist_name = $('#artist_query').val();

  $("div").not(".container-fluid").empty()
  $.ajax({
    method: "GET",
    url: `https://api.spotify.com/v1/search?q=${artist_name}&type=artist`,
  }).done(function(data){
    artistsController(data);
  }).fail(function(err) {
    showError();
  });
}