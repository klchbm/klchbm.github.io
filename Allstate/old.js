
function getResults(){
    "use strict";
    //first we need to create an XMLHttpRequest
    var xhttp = new XMLHttpRequest();
    
    //then we set up what will happen when we get a response from the server
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var data = this.responseText;
                jsonResponse = JSON.parse(data)
                table = document.createElement('table');
            
            //var searchResults = document.getElementById("searchResults");
           // searchResults.innerHTML = response;
            
            table.setAttribute('x', 'y');
            var properties = ['barometerNo', 'name'];
            var capitalize = function(s) {
                return s.charAt(0).toUpperCase() + s.slice(1);
            };
            
            function filterResults(data) {
                var input = document.getElementById('input').value;
                return data.filter(function(historicalData) {
                    return historicalData.name.toLowerCase().indexOf(input.toLowerCase()) != -1;
                });

            }
            
            var tr = document.createElement('tr');
            for (var i = 0; i < properties.length; i++) {
                var th = document.createElement('th');
                th.appendChild(document.createTextNode(capitalize(properties[i])));
                tr.appendChild(th);
            }

            table.appendChild(tr);

            var tr, row;
            var filtered = filterResults(jsonResponse["presidents"].president);
            for (var r = 0; r < filtered.length; r++) {
                tr = document.createElement('tr');
                row = filtered[r];
                for (var i = 0; i < properties.length; i++) {
                    var td = document.createElement('td');
                    td.appendChild(document.createTextNode(row[properties[i]]));
                    tr.appendChild(td);
                }
                table.appendChild(tr);
            }
            
            
            document.getElementById('searchResults').appendChild(table);
        }
    };
    //specifying type of request (GET/POST) and where it's going and async = true
    xhttp.open("GET", "data.json", true);
    //send ajax request
    xhttp.send();
}