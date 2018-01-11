window.addEventListener("load", function() {
var xmlhttp = new XMLHttpRequest();
var url = "https://api.github.com/users/Lost-in-Code-au/repos"
var elems = document.getElementsByClassName('box'),
size = elems.length;

for (var i = 0; i < size; i++) {

  var box = elems[i];
  var height = (window.innerHeight) ? window.innerHeight: document.documentElement.clientHeight;
  box.style.height=(height)+'px';
}

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
    var out = "<ol>";
    var i;
    for(i = 0; i < arr.length; i++) {
      test("https://api.github.com/repos/lost-in-Code-au/" + arr[i].name + "/commits", arr[i]);
    }

    function test(new_url,  obj) {

    var xmlhttp2 = new XMLHttpRequest();

    xmlhttp2.onreadystatechange = function(request) {
        if (request.target.readyState == 4 && request.target.status == 200) {
            var myArr1 = JSON.parse(request.target.responseText);

            document.getElementById("id01").innerHTML += "<a href=\"" + obj.html_url + "\"><div class=\"box\"> Name repo: <br><br>" + obj.name + "<br><br> commits: <br>" + myArr1.length + " </div></a> ";
        }
    };

    xmlhttp2.open("GET", new_url, true);
    xmlhttp2.send();

    }
}
})
