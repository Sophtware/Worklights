function tint(){
  var className = "tint";
  var regex = new RegExp("(^"+className+")|( "+className+")");
  if(! document.body.className.match(regex) ){
    document.body.className += " " + className;
  }
}
