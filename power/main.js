var elems = document.getElementsByClassName('case');
function problemDesu(){
    var cval = document.getElementById('main-selector').value;
    switch(cval){
        // elems[0]
        case 'payment':
            elems[0].style.display = 'block';
            var childnodes = elems[0].childNodes;
            for(var i = 0; i<childnodes.length; i++){
                childnodes[i].style.display = 'initial';
            }
        break;

        // elems[1]
        case 'login':
            elems[1].style.display = 'block';
            var childnodes = elems[1].childNodes;
            for(var i = 0; i<childnodes.length; i++){
                childnodes[i].style.display = 'initial';
            }
        break;

        // elems[2]
        case 'keyid':

            elems[2].style.display = 'block';
        break;

        // elems[3]
        case 'other':

            elems[3].style.display = 'block';
        break;
    }
    
}