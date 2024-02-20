function showDiv() {
    //console.log("message");
    var div = document.getElementById("form-par");
    var divs2 = document.getElementsByClassName("form-body"); //this is a list of elements not a single elem
  
  
    // loop thourgh each elem
    for (var j of divs2) {
      j.style.display = "none";
    }
  
    div.style.display = "flex";
  
  }
  