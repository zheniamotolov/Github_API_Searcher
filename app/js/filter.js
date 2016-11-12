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
