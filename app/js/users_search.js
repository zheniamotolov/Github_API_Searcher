'use strict';
function users_template_initialaize(info) {
    create_element("users_table");
    var template = Handlebars.compile(document.getElementById("users_template").innerHTML);
    document.getElementById("users_table").innerHTML += template(info);
}

function users_search() {

     //var timerId = setTimeout(function users_http_get() {
        clean();

        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/search/users?q=' + input_value() + '&sort=' + select_value() + '&order=desc&per_page=100', true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState != 4) return;
            if (this.status == 422) {
                alert("необрабатываемый экземпляр");
                console.log("422 Unprocessable Entity");
            }
            if (this.status == 400) {
                console.log("400 Bad Request");
                alert("Непрвальный запрос");
            }
            if (xhr.status != 200) {

                alert(xhr.status + ': ' + xhr.statusText);
                console.log(xhr.status + ': ' + xhr.statusText);
            }

            else {

                users_template_initialaize(JSON.parse(xhr.responseText));
            }
        };


         xhr.send();
    //     timerId = setTimeout(users_http_get, 10000);
    // }, 1);

    ///return timerId;
}