var swAPIroot = "http://swapi.co/api/";
var swAPI = "http://swapi.co/api/people?search=";

$( document ).ready(function(){
  $("#search").bind("input", function(){
    $.getJSON(swAPI + $("#search").val(),function( data ) {
      getPersonInfo(data.results[0]);
    });
  });
});

function getPersonInfo(obj){
  var items = [];
  $("#textbox").empty();
  items.push( "<li id=personname >Name: " + obj.name + "</li>" );
  items.push( "<li id=personheight >Height: " + obj.height + "</li>" );
  items.push( "<li id=personmass >Mass: " + obj.mass + "</li>" );
  items.push( "<li id=personbirthyear >Year of birth: " + obj.birth_year + "</li>" );
  getPlanetObj(obj.homeworld);
  $( "<ul/>", {
    html: items.join("")
  }).appendTo("#textbox");
}

function getPlanetObj(path){
  $.getJSON(path, function(data) {
    var items = [];
    $("#planetbox").empty();
    items.push( "<li id=personhomeworld >Homeworld: " + data.name + "</li>" );
    $( "<ul/>", {
      html: items.join("")
    }).appendTo("#planetbox");
  });
}

function getFilmObj(array){
  var films = [];
  $.each(array,function(i,path){
    $.getJSON(path,function(data) {
      array.push(data);
    });
  });
  return films;
}