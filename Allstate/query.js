function getResults(){
    
    //first we need to create an XMLHttpRequest
    var xmlHttp = new XMLHttpRequest();
    
    //then we set up what will happen when we get a response from the server
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200){
            
            var response = xmlHttp.responseText;
            
            var searchResults = document.getElementById("searchResults");
            searchResults.innerHTML = response;
        }
    };
    
    //grab input
    //var search = encodeURIComponent(document.getElementById("search").value);
    
    //added "Loading..." message before recieving response 
    document.getElementById("searchResults").innerHTML = "Loading...";
    
    //specifying type of request (GET/POST) and where it's going and async = true
    xmlHttp.open("GET", "data.json", true);
    
    //send ajax request
    xmlHttp.send();
}
    
