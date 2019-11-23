let closed=document.querySelector("#sidebar .fa-times");
let opened=document.getElementById("opened");

closed.onclick=function(){
    this.parentElement.classList.add("closed");
}

opened.onclick=function(){
    this.previousElementSibling.classList.remove("closed");


}

let navLi=document.querySelector("#sidebar ul").children;

for(let li of navLi){
    li.onclick=function(){
        // if(document.querySelector(".addColor")!=null){
        //     document.querySelector(".addColor").classList.remove("addColor");
        // }
        // this.children[0].classList.add("addColor");


        // this.firstElementChild.setAttribute("class","addColor");
        // this.firstElementChild.removeAttribute("href")
        // console.log(this.firstElementChild.getAttribute("href"))
        console.log(this.firstElementChild.hasAttribute("class"))
    }
}

// console.log(document.querySelector("#sidebar ul").lastElementChild)