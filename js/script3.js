
function findselectedg() {
    var result = document.querySelector('input[name="childreng"]:checked').value;
    if(result=="Yes"){

        document.getElementById("inputtextg").setAttribute('disabled', true);
    }
    else{
        document.getElementById("inputtextg").removeAttribute('disabled');
    }
}
function findselecteda() {
    var result = document.querySelector('input[name="childrena"]:checked').value;
    if(result=="Yes"){

        document.getElementById("inputtexta").setAttribute('disabled', true);
    }
    else{
        document.getElementById("inputtexta").removeAttribute('disabled');
    }
}
function findselectedb() {
    var result = document.querySelector('input[name="childrenb"]:checked').value;
    if(result=="Yes"){

        document.getElementById("inputtextb").setAttribute('disabled', true);
    }
    else{
        document.getElementById("inputtextb").removeAttribute('disabled');
    }
}
function findselectedc() {
    var result = document.querySelector('input[name="childrenc"]:checked').value;
    if(result=="Yes"){

        document.getElementById("inputtextc").setAttribute('disabled', true);
    }
    else{
        document.getElementById("inputtextc").removeAttribute('disabled');
    }
}

function findselected() {
    var result = document.querySelector('input[name="children"]:checked').value;
    if(result=="Yes"){

        document.getElementById("inputtext").setAttribute('disabled', true);
    }
    else{
        document.getElementById("inputtext").removeAttribute('disabled');
    }
}
