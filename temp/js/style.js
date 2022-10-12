let Icon = document.querySelector(".icon-bar-mobail i ");
let NavBar = document.querySelector(".navbar-mobal");
let IconCheng = document.querySelector(".icon-bar-mobail");
let header = document.querySelector(".top")


Icon.onclick = _ => {

    if (NavBar.classList.contains = "show") {
        NavBar.classList.toggle("show");
        //IconCheng.innerHTML = `<i style="font-size:30px;" class="fa-solid fa-xmark"></i>`;


    }
}


onscroll = _ => {
    if (scrollY > 200) {
        header.classList.add("backgroun-color");

    } else {
        header.classList.remove("backgroun-color");

    }
}