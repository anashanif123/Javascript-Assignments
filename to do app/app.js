var input = document.getElementById('userInput');
var clicksHistory=document.getElementById('clicks-history'); 

function additems() {
    console.log(input.value)

    var li = `<li> <span>${input.value} </span> 
    <button onclick="editThis(this)"> <i class="fa-solid fa-pen"></i></button>
    <button onclick="deleteThis(this)"><i class="fa-solid fa-trash-can"></i></button></li>`

   
    clicksHistory.innerHTML += li
}
function deleteThis(currentElement) {
    currentElement.parentElement.remove()
    
}
function editThis(currentElement) {
    var edit = prompt('please enter your edit text',currentElement.parentElement.firstElementChild.innerText);

    currentElement.parentElement.firstElementChild.innerText = edit;
    
}
