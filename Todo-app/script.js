const inputField = document.querySelector('#input-box');
const addTask = document.querySelector('#addTask');
const listContainer = document.querySelector('#list-container');

addTask.addEventListener('click',function(e){
    e.preventDefault();
    if(inputField.value === ''){
        alertMessage("Error","please enter some value !");
    }else{
        const li = document.createElement('li');
        li.innerHTML = inputField.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    inputField.value= '';
    setdata();
});

function alertMessage(title,message){
    swal({
        title: title,
        text: message,
        imageUrl: "images/thumbs-up.jpg"
      });
}

listContainer.addEventListener('click',function(event){
    event.preventDefault();
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle("checked");
        setdata();
    }else if(event.target.tagName === 'SPAN'){
        event.target.parentElement.remove();
        setdata();
    }
},false);

function setdata(){
    localStorage.setItem("todo-data",listContainer.innerHTML);
}

function getData(){
    listContainer.innerHTML = localStorage.getItem("todo-data");
}
getData();