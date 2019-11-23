// let btn = document.getElementById("Add");
// let buttons = document.getElementsByClassName("btn-add");
// let tags = document.getElementsByTagName("button");

// let btn = document.querySelector(".btn-add");
// let btns = document.querySelectorAll(".btn-add");
// console.log(btns.length)

// btn.onclick = function() {
//     alert("Salam P507")
// }

// btn.onclick = function() {
//     alert("Sagol P507")
// }

// btn.addEventListener("click", function() {
//     alert("Salam P507")
// })

// btn.addEventListener("click", function() {
//     alert("Sagol P507")
// })

// function Test() {
//     alert("Salam P507")
// }

// let text = document.getElementById("text").innerText;
// document.getElementById("text").innerText = "<b>Vusal yaxchi oglandi?</b>";
// let html = document.getElementById("text").innerHTML;
// document.getElementById("text").innerHTML = "<b>Vusal yaxchi oglandi?</b>";
// console.log(html)

// let val = document.querySelector("#Number").value;
// document.querySelector("#Number").value = "Mubariz"
// console.log(document.querySelector("#Number").value)


//PRACTICE

let number = document.getElementById("Number");
let parentLi = document.getElementById("parentLi");
let add = document.getElementById("Add");
let remove = document.getElementById("Remove");

add.onclick = function() {
    // console.log(this.style.color)
    parentLi.innerHTML = "";
    // document.querySelector(".test").classList.toggle("item")
    let liCount = number.value;
    for (let i = 1; i <= liCount; i++) {
        let li = document.createElement("li");
        li.className = "list-group-item";
        li.innerText = i;
        li.onclick = function() {
            this.classList.add("color");
            // this.remove();
            // orderManagment();
        }
        parentLi.append(li);
        // parentLi.innerHTML += "<li class='list-group-item'>" + i + "</li>";
        // `<li class='list-group-item'>${i}</li>`

        // li.style.backgroundColor = "yellow";
        // li.style.color = "red";

    }
    number.value = "";
}

function orderManagment(){
    let Li=document.querySelectorAll(".list-group-item");
    for(let j=0;j<Li.length;j++){
        Li[j].innerText=j+1;
    }
}

// let Allli = document.querySelectorAll(".list-group-item");

// for (let li of Allli) {
//     li.onclick = function() {
//         this.classList.add("color");
//     }
// }

remove.onclick = function(){
    let selectedLi=document.getElementsByClassName("color");
    
    for(let li of selectedLi){
        li.remove();
        console.log(selectedLi)
    }
}