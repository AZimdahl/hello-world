(function(){
    let div = document.getElementById("text");
    let heading = document.createElement("h1");
    let headingText = document.createTextNode("Hello World!");
    
    heading.appendChild(headingText);
    div.appendChild(heading);
})();