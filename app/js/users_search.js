'use strict';
function users_template_initialaize(info) {
    create_element("users_table");
    var template = Handlebars.compile(document.getElementById("users_template").innerHTML);
    document.getElementById("users_table").innerHTML += template(info);
}

function users_search() {

    // var timerId = setTimeout(function users_http_get() {
        clean();
        var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
        {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'https://api.github.com/search/users?q=' + input_value() + '&sort=' + select_value() + '&order=desc&per_page=100', true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState != 4) return;

                if (xhr.status != 200) {

                    alert(xhr.status + ': ' + xhr.statusText);
                } else {

                    users_template_initialaize(JSON.parse(xhr.responseText));
                }
            }
        }


        xhr.send();
    //     timerId = setTimeout(users_http_get, 60000);
    // }, 1);
}