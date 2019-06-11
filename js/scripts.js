$(document).ready(function(){

  var flavors = ["strawberry", "chocolate", "vanilla"];


  flavors.forEach(function(flavor) {
    var list = $("<li>" + flavor + "</li>");
    $("#input").append(list);
  });

});
