<?php

    $username = empty($_COOKIE['username']) ? '' : $_COOKIE['username'];

    if(!$username){
        header("location: login.php");
        exit;
    }

?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Code with Me!</title>
        
        <!-- Link --> 
        <link rel="stylesheet" type="text/css" href="CodePage.css">
        <script src="HomePage.js"></script>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
        
        <!-- Link for JQuery Resource: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_slide_toggle--> 
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

        
        <!-- Nav Bar on Multiple Pages Recourse: https://stackoverflow.com/questions/31954089/how-can-i-reuse-a-navigation-bar-on-multiple-pages-->     
        <script src="//code.jquery.com/jquery.min.js"></script>
        <script>
        $.get("navBar.html", function(data){
            $("#placeHolder").replaceWith(data);
        });
            
        $(document).ready(function(){
          $("#flip").click(function(){
            $("#panel").slideToggle("slow");
          });
        });    
        </script>
        
    </head>
    <body>
        
        <!-- Nav Bar --> 
        <div id="placeHolder"></div> 
        <p id="IN">Logged in. Username == "test"</p>
        <p>Code with Clementine</p>
        <p><a id="logout" href='logout.php'>Logout</a></p>
    
        <div class="row">
            <div class="column">
                <div>
                    <h2>Want to learn HTML?</h2>
                    <p id="desc">Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.</p>
                </div>
            </div>
            <div>
                <div class="column">
                    <iframe id="youtube" src="https://www.youtube.com/embed/XqgPSbzIbwY" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        
    <!-- jQuery Get Code Description --> 
    <div id="flip">Click for Example Code to Copy/Paste</div>
        <!-- Resource for printing tags: https://stackoverflow.com/questions/6817262/how-to-display-html-tags-as-plain-text  --> 
        <div id="panel">&lt;p&gt; Hello World &lt;/p&gt;<br>&lt;h2&gt; HTML is so fun! &lt;/h2&gt;</div>

        
    <!-- HTML Editor Recourse: https://www.w3schools.com/html/html_editors.asp -->
        
    <div id="wrapper" class="group">
        <h1 id="ed">HTML Editor </h1>
        <div id="area">
            <textarea id="html" placeholder="Start Typing"></textarea>       
            <button type="button" onclick="launch()">Launch</button>	
        </div>
        <div id="show"></div>   

    </div>     
    </body>
</html>