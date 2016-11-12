'use strict';
function clean() {
    var elem;
    if ((document.getElementById("repository_table"))) {
         elem = document.getElementById("repository_table");
        elem.parentNode.removeChild(elem);
    }
    else if (document.getElementById("users_table")){
         elem = document.getElementById("users_table");
        elem.parentNode.removeChild(elem);
    }
}