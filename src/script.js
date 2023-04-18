
// Import des elements HTML

let listChildren = body.children;
let listMainChildren = document.getElementById('main').children;

console.log(listMainChildren)

for (let i = 0; i < listChildren.length; i++) {
    
  if (listChildren[i].id != "") {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        document.getElementById(listChildren[i].id).innerHTML =
          xhr.responseText;
      }
    };
    xhr.open("GET", listChildren[i].id + ".html", true);
    xhr.send();
  }
}
for (let i = 0; i < listMainChildren.length; i++) {
    
  if (listMainChildren[i].id != "") {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        document.getElementById(listMainChildren[i].id).innerHTML =
          xhr.responseText;
      }
    };
    xhr.open("GET", listMainChildren[i].id + ".html", true);
    xhr.send();
  }
}



