const toArray = document.querySelector("#to-array");
const displayArray = document.querySelector("#display-array");
const clear = document.querySelector("#clear-array");
const input = document.querySelector("#input");
const listHeader = document.querySelector("#list-header");
const theList = [];

function addToArray(){
    theList.push(input.value);
    console.log(theList);
}

function arrayToHTML(){
    for (let i =0; i< theList.lenght; i++){
        const listItem = theList[i];
        let child = document.createElement("li")
        child.textContent = listItem
    listHeader.appendChild((child))    }
}


toArray.addEventListener("click", addToArray);