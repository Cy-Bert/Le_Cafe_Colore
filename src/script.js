// Import des elements HTML

let listChildren = body.children;
let listMainChildren = document.querySelector('#main').children;

//Définir ma fonction qui se nomme fetchHTML
function fetchHtml(list){
  for (let i = 0; i < list.length; i++) {
    
    if (list[i].id != "") {
        const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          document.querySelector("#"+list[i].id).innerHTML =
            xhr.responseText;
        }
      };
      xhr.open("GET", list[i].id + ".html", true);
      xhr.send();
    }
  }
}

//Appeler mes fonctions
fetchHtml(listChildren)
fetchHtml(listMainChildren)


