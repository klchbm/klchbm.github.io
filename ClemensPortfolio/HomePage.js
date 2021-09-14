//Text Editor HTML
function launch() {
    var edits = document.getElementById("html");
    var SHOW = document.getElementById("show");
    SHOW.innerHTML = edits.value;
}

//AJAX
function submitReview() {

    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            
            //LOADING ANIMATION
            document.getElementById("loader").style.display = "none";          
            document.getElementById("contentBox").innerHTML = xmlHttp.responseText;

            var form = true;

             // Get input values
            
             //document.getElementById("loader").style.display = "none"; 
            
             var fullname = document.getElementById("fname").value;
             var review = document.getElementById("newReview").value;
             
                /*var one = document.getElementsById("one").value;
             var two = document.getElementsById("two").value;
             var three = document.getElementsById("three").value;
             var four = document.getElementsById("four").value;
             var five = document.getElementsById("five").value;*/
            
             var rating = document.getElementById("mySelect").selectedIndex;
   
             if(fullname == ""){
                form = false;
                alert("You must add your name");
             }
             if(review == ""){
                form = false;
                alert("You must add a comment");
             } 
            if(rating == ""){
                form = false;
                alert("You must add a rating");
             } 

             if(form == true ){

                 
                 //HIDE or SHOW review
                 var boxRev = document.getElementById('row2Review');
                 var valBox = row2Review.style.display;
                 if (valBox == 'block') {
                    //Block is visible. hide it
                    boxRev.style.display = 'none';
                 }
                 else {
                    //Block is hidden. show it
                    boxRev.style.display = 'block';
                    // Add values to css card
                    ReviewName.innerHTML = fullname;
                    ReviewDesc.innerHTML = review;
                    finalRating.innerHTML = rating;
                    
                 }
             }
            
            
            
        }
    };
    
    document.getElementById("loader").style.display = "block";
    document.getElementById("contentBox").innerHTML = "";

    xmlHttp.open("GET", "AJAX.php", true);

    xmlHttp.send();

}

// The following JavaScript drives the loading animation
var tick = 1;
setInterval(function() {
    var loadNodes = document.querySelectorAll(".loadNode");
    if (tick == 1) {
        backgroundColors = ["#73c77a", "#d7fcda", "#9edea3"];
        tick = 2;
    }
    else if (tick == 2) {
        backgroundColors = ["#73c77a", "#9edea3", "#d7fcda"];
        tick = 3
    }
    else {
        backgroundColors = ["#d7fcda", "#73c77a", "#9edea3"];
        tick = 1;
    }
    loadNodes[0].style.backgroundColor = backgroundColors[0];
    loadNodes[1].style.backgroundColor = backgroundColors[1];
    loadNodes[2].style.backgroundColor = backgroundColors[2];
}, 200);


// JQuery for CodePage Resource: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_slide_toggle
$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});












