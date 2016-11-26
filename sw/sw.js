var swAPI = "http://swapi.co/api/people?search=";
$( document ).ready(function(){
  $("#search").bind("input", function(){
    $.getJSON(swAPI + $("#search").val(),function( data ) {
      var items = [];
      $("#textbox").empty();
      $.each( data["results"][0], function( key, val ) {
        items.push( "<li id='" + key + "'>" + key + " : " + val + "</li>" );
      });
      $( "<ul/>", {
        html: items.join( "" )
      }).appendTo("#textbox");
    });
  });
});