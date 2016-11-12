'use strict';
function create_element(value) {
    var elem = document.createElement("div");
    elem.setAttribute("id", value);
    var container = document.getElementsByClassName("container-fluid")[0];
    container.appendChild(elem);

}