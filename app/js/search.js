'use strict';
function select(){
 return document.getElementById("select").value;
}
function handler() {
    // console.log("2)"+select_1());
    if ( "user search by name".indexOf(select())!=(-1)) {
        // repository_search();

        users_search()
    }
    else if ( "repository search by key words".indexOf(select())!=(-1)) {
        // console.log("slepp");
        repository_search();
    }
}
// function click() {
//     var button = document.getElementById("button");
//     console.log("1)"+button);
//     button.addEventListener("click", handler);
// }
function input_value() {
    var input = document.getElementsByTagName("input")[0];
    return input.value;
}