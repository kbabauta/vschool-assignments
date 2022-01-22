var list = document.querySelector('#list');

function addDeleteEvent(button){
    button.addEventListener("click", function (){
            button.parentNode.remove();
    });
}

function addEditEvent(button){
    button.addEventListener("click", function(){
        if(!button.parentNode.lastElementChild.id){
            let newInput = document.createElement("input");
            newInput.id = "new-input";
            newInput.value = button.parentNode.firstElementChild.textContent;
            button.parentNode.append(newInput);
            button.textContent = "save";
        } else {
            button.parentNode.firstElementChild.textContent = 
                document.getElementById("new-input").value;
            
            button.textContent = "edit";
            button.parentNode.lastElementChild.remove();


        }
    });
}

function createItem(todo){
    let cln = document.getElementById("list").firstElementChild.cloneNode(true);
    cln.classList.remove("no-show");
    cln.firstElementChild.textContent = todo;
    addDeleteEvent(cln.lastElementChild);
    addEditEvent(cln.childNodes[3]);
    list.appendChild(cln);
}


const delButton = document.getElementsByClassName("delete");
for (let button of delButton) addDeleteEvent(button);


const editButton = document.getElementsByClassName("edit");
for (let button of editButton) addEditEvent(button);

document.querySelector("form").onsubmit = (e) => {
    e.preventDefault();
    createItem(document.getElementById("title").value);
    document.getElementById("title").value = "";
}

