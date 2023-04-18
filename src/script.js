
let listChildren = body.children;

for (let i = 0; i < listChildren.length; i++) {
    
  if (listChildren[i].id != "") {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        document.querySelector(`#${listChildren[i].id}`).innerHTML =
          xhr.responseText;
      }
    };
    xhr.open("GET", listChildren[i].id + ".html", true);
    xhr.send();
  }
}
