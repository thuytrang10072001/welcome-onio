const template = {
    btnDelete: () => {
        const i = document.createElement("i")
        i.classList.add("fa-solid")
        i.classList.add("fa-xmark")

        const button = document.createElement("button")
        button.type="button"
        button.setAttribute("data-bs-toggle","modal")
        button.setAttribute("data-bs-target","#myModal")
        button.appendChild(i)
        return button;
    },
    item: (item)=> {
        const input = document.createElement("input")
        input.type = "radio"
        input.name = "selector"
        input.id = item.id

        const textNode = document.createTextNode(item.title)
        const label = document.createElement("label")
        label.setAttribute("for", item.id)
        label.classList.add("hub__content--checkmark")
        label.appendChild(textNode)

        const textStatus = document.createTextNode(item.status)
        const span = document.createElement("span")
        span.appendChild(textStatus)

        const selected = document.createElement("div")
        selected.classList.add("hub__content--selected")
        selected.classList.add("col-xl-12")
        selected.appendChild(input)
        selected.appendChild(label)

        const active = document.createElement("div")
        active.classList.add("hub__content--active")
        active.classList.add("hub__content--active-orange")
        active.appendChild(span)

        const contentItem = document.createElement("div")
        contentItem.classList.add("hub__content--item")
        contentItem.classList.add("col-xl-12")
        contentItem.appendChild(selected)
        contentItem.appendChild(active)
        return contentItem;
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

for(let i = 0; i < data.length; i++){ 
    data[i].status= random[Math.randomInt(0,3)]
}


//Insert item into list
const list = document.querySelector('.hub__content--list')
data.forEach((item, index) => {
    list.appendChild(template.item(item))
    removeClass(list.lastElementChild.lastElementChild)
    getEvent(list.lastElementChild.firstElementChild.firstElementChild)
    if(item.status == 'Inactive'){
        //console.log(list.lastElementChild)
        eventRemove(list.lastElementChild)
    }
})



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
        nodeParent.appendChild(template.btnDelete())
    }
    return;
} 

//Change button color 
function getEvent(item){
    const listItem = document.querySelectorAll('.hub__content--selected input')
    if(item.disabled == false){
        item.addEventListener("click", changeButton);
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

//Remove item Inactive
function eventRemove(item){
    console.log(item)
    item.addEventListener("click", insertPopup)
    function insertPopup(){
        const modal = document.querySelector('.modal-body')
        modal.innerText = item.firstElementChild.lastElementChild.innerText
    }
} 

const btnYes = document.querySelector('.btn-yes');
function deleteItem (){
    const title = document.querySelector('.modal-body')
    for(let i = 0; i < data.length; i++){
        if(title.innerText == data[i].title){
            data.splice(i,1);
            const list = document.getElementById('list')
            list.removeChild(list.children[i])
        }
    }
}
btnYes.addEventListener("click", deleteItem)
