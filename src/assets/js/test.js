const template = function(data){
    return{
        btnDelete: `<button type="button" data-bs-toggle="modal" data-bs-target="#myModal"><i class="fa-solid fa-xmark"></i></button>`,
        item:  `<div class="hub__content--item col-xl-12">   
        <div class="hub__content--selected col-xl-12">     
            <input type="radio" id=${data.id} name="selector"/> 
            <label for=${data.id}class="hub__content--checkmark"> ${data.title}</label>
        </div>
        <div class="hub__content--active hub__content--active-orange">   
            <span> ${data.status}</span>
        </div>
    </div>`
    }
}
const data=[
    {
        title: 'Hub 1 Lorem ipsum dolor sit amet',
        id: 1
    },
    {
        title: 'Hub 2 Lorem ipsum dolor sit amet',
        id: 2
    },
    {
        title: 'Hub 3 Lorem ipsum dolor sit amet',
        id: 3
    },
    { 
        title: 'Hub 4 Lorem ipsum dolor sit amet',
        id: 4
    },
    {
        title: 'Hub 5 Lorem ipsum dolor sit amet', 
        id: 5
    },
    {
        title: 'Hub 6 Lorem ipsum dolor sit amet',
        id: 6
    },
    {
        title: 'Hub 7 Lorem ipsum dolor sit amet',
        id: 7
    },
    {
        title: 'Hub 8 Lorem ipsum dolor sit amet',
        id: 8
    },
    {
        title: 'Hub 9 Lorem ipsum dolor sit amet',
        id: 9
    },
    {
        title: 'Hub 10 Lorem ipsum dolor sit amet',
        id: 10
    },
]

const random = ["Restarting...", "Active", "Inactive"]
Math.randomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function initializeData(){
    for(let i = 0; i < data.length; i++){ 
        data[i].status= random[Math.randomInt(0,3)]
    }
}

initializeData();

//Insert item into list
function insertItem (){
    const list = document.querySelector('.hub__content--list')
    list.innerHTML = '';
    data.forEach(item => list.innerHTML += template(item).item)
}
insertItem();

//Remove color active and insert loader, disabled
function removeClass(item){
    if(item.innerText == "Restarting..."){
        item.classList.remove('hub__content--active-orange')
        const input = item.parentElement.firstElementChild.firstElementChild;
        input.disabled="disabled";
        input.classList.add("hub__content--selected-loader")
    }
    if(item.innerText == "Inactive"){
        item.classList.remove('hub__content--active-orange')
        const nodeParent = item.parentElement
        const input = item.parentElement.firstElementChild.firstElementChild;
        input.disabled="disabled";
        nodeParent.classList.add('hub__content--item-disabled')
        nodeParent.innerHTML += template(item).btnDelete
    }
} 
const listActive = document.querySelectorAll('.hub__content--active-orange')
listActive.forEach(removeClass)

//Change button color 
function getEvent(item){
    if(item.disabled == false){
        item.addEventListener("click", changeButton);
        console.log(item)
    }
    function changeButton(){
        let count = 0;
        for(let i = 0; i < listItem.length; i++){
            if(listItem[i].checked == true){
                count += 1;
            } 
        }
        const btn = document.querySelector('.hub__content--button') 
        if(count){ 
            btn.classList.add('hub__content--button-orange')
        }else{
            btn.classList.remove('hub__content--button-orange')
        }
    }                
} 

const listItem = document.querySelectorAll('.hub__content--selected input')
listItem.forEach(getEvent);

//Remove item Inactive
function eventRemove(item){
    item.addEventListener("click", insertPopup)
    function insertPopup(){
        const modal = document.querySelector('.modal-body')
        modal.innerText = item.parentElement.firstElementChild.lastElementChild.innerText
    }
} 

const listDisabled = document.querySelectorAll('.hub__content--item-disabled button')
listDisabled.forEach(eventRemove)

const btnYes = document.querySelector('.btn-yes');
function deleteItem (){
    const title = document.querySelector('.modal-body')
    for(let i = 0; i < data.length; i++){
        if(title.innerText == data[i].title){
            data.splice(i,1);
            const list = document.getElementById('list')
            list.removeChild(list.childNodes[i])
        }
    }
}
btnYes.addEventListener("click", deleteItem)
