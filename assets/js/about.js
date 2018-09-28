function exit(){
  var about_window = document.getElementById("main-window").classList.add("no-display");
}

function minimize(){
  document.getElementById("content").classList.add("no-display");
}

function maximize(){
  var about_window = document.getElementById("main-window");
  var content_window = document.getElementById("content").classList.remove("no-display");
}
