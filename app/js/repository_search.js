'use strict';
function repository_template_initialaize(info) {
    console.log(info);
    console.log("kek");
    create_element("repository_table");
    var template = Handlebars.compile(document.getElementById("repository_template").innerHTML);
    document.getElementById("repository_table").innerHTML += template(info);
}

function repository_search() {

  //  var timerId = setTimeout(function repository_http_get() {
        clean();

        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/search/repositories?q=' + input_value() + '&sort=' + select_value() + '&order=desc&per_page=100', true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) return;
            //button.innerHTML = 'Готово!';
            if (xhr.status != 200) {
                alert(xhr.status + ': ' + xhr.statusText);
            } else {
                repository_template_initialaize(JSON.parse(xhr.responseText));
                //console.log(ar);
            }
        };

        xhr.send();
    //     timerId = setTimeout(repository_http_get, 10000);
    // }, 1);
}