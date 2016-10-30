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
'use strict';
function create_element(value) {
    var elem = document.createElement("div");
    elem.setAttribute("id", value);
    var container = document.getElementsByClassName("container-fluid")[0];
    container.appendChild(elem);

}
'use strict';
function filter_type() {
    var template;
    if ("user search by name".indexOf(select()) != (-1)) {
        // repository_search();
        //followers, repositories, or joined
        //var select_2 = document.getElementsByTagName("select")[1];
        //select_2.createElement("option");
        if (document.getElementById("select_second")) {
            template= document.getElementById("select_second");
            template.parentNode.removeChild(template);
        }
        template = Handlebars.compile(document.getElementById("option_factory").innerHTML);

        document.getElementById("select_items").innerHTML += template({
            items: [
                {
                    opt: "followers"
                },
                {
                    opt: "repositories"
                },
                {
                    opt: "joined"
                }
            ]
        });
    }
    else if ("repository search by key words".indexOf(select()) != (-1)) {
        // console.log("slepp");
        // <option>Filter by stars</option>
        // <option>Filter by forks</option>
        // <option>Filter by updated</option>
        if (document.getElementById("select_second")) {
            template= document.getElementById("select_second");
            template.parentNode.removeChild(template);
        }
        template = Handlebars.compile(document.getElementById("option_factory").innerHTML);

        document.getElementById("select_items").innerHTML += template({
            items: [
                {
                    opt: "stars"
                },
                {
                    opt: "forks"
                },
                {
                    opt: "updated"
                }
            ]
        });
    }
}
function select_value(){
    var select=document.getElementById("select_second");
    return select.value;
}
document.addEventListener("DOMContentLoaded", filter_type);
var elem = document.getElementById("select");
elem.addEventListener("click", filter_type);

'use strict';
function repository_template_initialaize(info) {
    create_element("repository_table");
    var template = Handlebars.compile(document.getElementById("repository_template").innerHTML);
    document.getElementById("repository_table").innerHTML += template(info);
}

function repository_search() {
    // var timerId = setTimeout(function repository_http_get() {
        clean();
        var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
        {
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
        }
        xhr.send();
    //     timerId = setTimeout(repository_http_get, 60000);
    // }, 1);
}
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsZWFuLmpzIiwiY3JlYXRlX2VsZW1lbnQuanMiLCJmaWx0ZXIuanMiLCJyZXBvc2l0b3J5X3NlYXJjaC5qcyIsInNlYXJjaC5qcyIsInVzZXJzX3NlYXJjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5mdW5jdGlvbiBjbGVhbigpIHtcbiAgICB2YXIgZWxlbTtcbiAgICBpZiAoKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVwb3NpdG9yeV90YWJsZVwiKSkpIHtcbiAgICAgICAgIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlcG9zaXRvcnlfdGFibGVcIik7XG4gICAgICAgIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2Vyc190YWJsZVwiKSl7XG4gICAgICAgICBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2Vyc190YWJsZVwiKTtcbiAgICAgICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pO1xuICAgIH1cbn0iLCIndXNlIHN0cmljdCc7XG5mdW5jdGlvbiBjcmVhdGVfZWxlbWVudCh2YWx1ZSkge1xuICAgIHZhciBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlbGVtLnNldEF0dHJpYnV0ZShcImlkXCIsIHZhbHVlKTtcbiAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNvbnRhaW5lci1mbHVpZFwiKVswXTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbSk7XG5cbn0iLCIndXNlIHN0cmljdCc7XG5mdW5jdGlvbiBmaWx0ZXJfdHlwZSgpIHtcbiAgICB2YXIgdGVtcGxhdGU7XG4gICAgaWYgKFwidXNlciBzZWFyY2ggYnkgbmFtZVwiLmluZGV4T2Yoc2VsZWN0KCkpICE9ICgtMSkpIHtcbiAgICAgICAgLy8gcmVwb3NpdG9yeV9zZWFyY2goKTtcbiAgICAgICAgLy9mb2xsb3dlcnMsIHJlcG9zaXRvcmllcywgb3Igam9pbmVkXG4gICAgICAgIC8vdmFyIHNlbGVjdF8yID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzZWxlY3RcIilbMV07XG4gICAgICAgIC8vc2VsZWN0XzIuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0X3NlY29uZFwiKSkge1xuICAgICAgICAgICAgdGVtcGxhdGU9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0X3NlY29uZFwiKTtcbiAgICAgICAgICAgIHRlbXBsYXRlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGVtcGxhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHRlbXBsYXRlID0gSGFuZGxlYmFycy5jb21waWxlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3B0aW9uX2ZhY3RvcnlcIikuaW5uZXJIVE1MKTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdF9pdGVtc1wiKS5pbm5lckhUTUwgKz0gdGVtcGxhdGUoe1xuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG9wdDogXCJmb2xsb3dlcnNcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBvcHQ6IFwicmVwb3NpdG9yaWVzXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0OiBcImpvaW5lZFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoXCJyZXBvc2l0b3J5IHNlYXJjaCBieSBrZXkgd29yZHNcIi5pbmRleE9mKHNlbGVjdCgpKSAhPSAoLTEpKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2xlcHBcIik7XG4gICAgICAgIC8vIDxvcHRpb24+RmlsdGVyIGJ5IHN0YXJzPC9vcHRpb24+XG4gICAgICAgIC8vIDxvcHRpb24+RmlsdGVyIGJ5IGZvcmtzPC9vcHRpb24+XG4gICAgICAgIC8vIDxvcHRpb24+RmlsdGVyIGJ5IHVwZGF0ZWQ8L29wdGlvbj5cbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0X3NlY29uZFwiKSkge1xuICAgICAgICAgICAgdGVtcGxhdGU9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0X3NlY29uZFwiKTtcbiAgICAgICAgICAgIHRlbXBsYXRlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGVtcGxhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHRlbXBsYXRlID0gSGFuZGxlYmFycy5jb21waWxlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3B0aW9uX2ZhY3RvcnlcIikuaW5uZXJIVE1MKTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbGVjdF9pdGVtc1wiKS5pbm5lckhUTUwgKz0gdGVtcGxhdGUoe1xuICAgICAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG9wdDogXCJzdGFyc1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG9wdDogXCJmb3Jrc1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG9wdDogXCJ1cGRhdGVkXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHNlbGVjdF92YWx1ZSgpe1xuICAgIHZhciBzZWxlY3Q9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWxlY3Rfc2Vjb25kXCIpO1xuICAgIHJldHVybiBzZWxlY3QudmFsdWU7XG59XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmaWx0ZXJfdHlwZSk7XG52YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0XCIpO1xuZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZmlsdGVyX3R5cGUpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuZnVuY3Rpb24gcmVwb3NpdG9yeV90ZW1wbGF0ZV9pbml0aWFsYWl6ZShpbmZvKSB7XG4gICAgY3JlYXRlX2VsZW1lbnQoXCJyZXBvc2l0b3J5X3RhYmxlXCIpO1xuICAgIHZhciB0ZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlcG9zaXRvcnlfdGVtcGxhdGVcIikuaW5uZXJIVE1MKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlcG9zaXRvcnlfdGFibGVcIikuaW5uZXJIVE1MICs9IHRlbXBsYXRlKGluZm8pO1xufVxuXG5mdW5jdGlvbiByZXBvc2l0b3J5X3NlYXJjaCgpIHtcbiAgICAvLyB2YXIgdGltZXJJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gcmVwb3NpdG9yeV9odHRwX2dldCgpIHtcbiAgICAgICAgY2xlYW4oKTtcbiAgICAgICAgdmFyIFhIUiA9IChcIm9ubG9hZFwiIGluIG5ldyBYTUxIdHRwUmVxdWVzdCgpKSA/IFhNTEh0dHBSZXF1ZXN0IDogWERvbWFpblJlcXVlc3Q7XG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHhoci5vcGVuKCdHRVQnLCAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9zZWFyY2gvcmVwb3NpdG9yaWVzP3E9JyArIGlucHV0X3ZhbHVlKCkgKyAnJnNvcnQ9JyArIHNlbGVjdF92YWx1ZSgpICsgJyZvcmRlcj1kZXNjJnBlcl9wYWdlPTEwMCcsIHRydWUpO1xuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgIT0gNCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIC8vYnV0dG9uLmlubmVySFRNTCA9ICfQk9C+0YLQvtCy0L4hJztcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoeGhyLnN0YXR1cyArICc6ICcgKyB4aHIuc3RhdHVzVGV4dCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVwb3NpdG9yeV90ZW1wbGF0ZV9pbml0aWFsYWl6ZShKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpKTtcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhhcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB4aHIuc2VuZCgpO1xuICAgIC8vICAgICB0aW1lcklkID0gc2V0VGltZW91dChyZXBvc2l0b3J5X2h0dHBfZ2V0LCA2MDAwMCk7XG4gICAgLy8gfSwgMSk7XG59IiwiJ3VzZSBzdHJpY3QnO1xuZnVuY3Rpb24gc2VsZWN0KCl7XG4gcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0XCIpLnZhbHVlO1xufVxuZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIjIpXCIrc2VsZWN0XzEoKSk7XG4gICAgaWYgKCBcInVzZXIgc2VhcmNoIGJ5IG5hbWVcIi5pbmRleE9mKHNlbGVjdCgpKSE9KC0xKSkge1xuICAgICAgICAvLyByZXBvc2l0b3J5X3NlYXJjaCgpO1xuXG4gICAgICAgIHVzZXJzX3NlYXJjaCgpXG4gICAgfVxuICAgIGVsc2UgaWYgKCBcInJlcG9zaXRvcnkgc2VhcmNoIGJ5IGtleSB3b3Jkc1wiLmluZGV4T2Yoc2VsZWN0KCkpIT0oLTEpKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2xlcHBcIik7XG4gICAgICAgIHJlcG9zaXRvcnlfc2VhcmNoKCk7XG4gICAgfVxufVxuLy8gZnVuY3Rpb24gY2xpY2soKSB7XG4vLyAgICAgdmFyIGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnV0dG9uXCIpO1xuLy8gICAgIGNvbnNvbGUubG9nKFwiMSlcIitidXR0b24pO1xuLy8gICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlcik7XG4vLyB9XG5mdW5jdGlvbiBpbnB1dF92YWx1ZSgpIHtcbiAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlucHV0XCIpWzBdO1xuICAgIHJldHVybiBpbnB1dC52YWx1ZTtcbn0iLCIndXNlIHN0cmljdCc7XG5mdW5jdGlvbiB1c2Vyc190ZW1wbGF0ZV9pbml0aWFsYWl6ZShpbmZvKSB7XG4gICAgY3JlYXRlX2VsZW1lbnQoXCJ1c2Vyc190YWJsZVwiKTtcbiAgICB2YXIgdGVtcGxhdGUgPSBIYW5kbGViYXJzLmNvbXBpbGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2Vyc190ZW1wbGF0ZVwiKS5pbm5lckhUTUwpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcnNfdGFibGVcIikuaW5uZXJIVE1MICs9IHRlbXBsYXRlKGluZm8pO1xufVxuXG5mdW5jdGlvbiB1c2Vyc19zZWFyY2goKSB7XG5cbiAgICAvLyB2YXIgdGltZXJJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gdXNlcnNfaHR0cF9nZXQoKSB7XG4gICAgICAgIGNsZWFuKCk7XG4gICAgICAgIHZhciBYSFIgPSAoXCJvbmxvYWRcIiBpbiBuZXcgWE1MSHR0cFJlcXVlc3QoKSkgPyBYTUxIdHRwUmVxdWVzdCA6IFhEb21haW5SZXF1ZXN0O1xuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICB4aHIub3BlbignR0VUJywgJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vc2VhcmNoL3VzZXJzP3E9JyArIGlucHV0X3ZhbHVlKCkgKyAnJnNvcnQ9JyArIHNlbGVjdF92YWx1ZSgpICsgJyZvcmRlcj1kZXNjJnBlcl9wYWdlPTEwMCcsIHRydWUpO1xuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgIT0gNCkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgIT0gMjAwKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoeGhyLnN0YXR1cyArICc6ICcgKyB4aHIuc3RhdHVzVGV4dCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICB1c2Vyc190ZW1wbGF0ZV9pbml0aWFsYWl6ZShKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIHhoci5zZW5kKCk7XG4gICAgLy8gICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHVzZXJzX2h0dHBfZ2V0LCA2MDAwMCk7XG4gICAgLy8gfSwgMSk7XG59Il19
