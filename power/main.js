window.onload = function(){
    if(window.location.pathname == '/support.html'){
            elems[0].style.display = 'flex';
        }else{
            console.log("You're currently in " + window.location);
        }
    }


var elems = document.getElementsByClassName('case');

function problemDesu(start){
    var cval = document.getElementById('main-selector').value;

// SpaghettiScript z
    switch(cval){
        // elems[0]
        case 'payment':
            clearDisplay();
            elems[0].style.display = 'flex';
           
        break;

        // elems[1]
        case 'login':
            clearDisplay();
            elems[1].style.display = 'flex';
          
        break;

        // elems[2]
        case 'keyid':
            clearDisplay();
            elems[2].style.display = 'flex';
            
        break;

        // elems[3]
        case 'other':
            clearDisplay();
            elems[3].style.display = 'flex';
            
        break;
    }
    
}

function clearDisplay(){
    for(var i = 0; i<elems.length; i++){
        elems[i].style.display = 'none';
    }
}