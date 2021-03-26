function miles(){
    if(document.querySelectorAll(".div")[0].classList[1] === "miles"){
        document.querySelectorAll(".div")[0].classList.add("miles2");
        document.querySelectorAll(".div")[0].classList.remove("miles");
        document.querySelectorAll("p")[0].classList.remove("message");
        document.querySelectorAll(".card")[1].style.zIndex = "-1";
        document.querySelectorAll(".card")[1].style.opacity = "0";
        document.querySelector(".daniel").classList.add("back");
        document.querySelectorAll(".card")[2].style.zIndex = "-1";
        document.querySelectorAll(".card")[2].style.opacity = "0";
        document.querySelector(".john").classList.add("back");
        document.querySelectorAll(".card")[3].style.zIndex = "-1";
        document.querySelectorAll(".card")[3].style.opacity = "0";
        document.querySelector(".kayla").classList.add("back");
        document.querySelectorAll(".card")[4].style.zIndex = "-1";
        document.querySelectorAll(".card")[4].style.opacity = "0";
        document.querySelector(".georgette").classList.add("back");
    }else{
        document.querySelectorAll(".div")[0].classList.remove("miles2");
        document.querySelectorAll(".div")[0].classList.add("miles");
        document.querySelectorAll("p")[0].classList.add("message");
        document.querySelectorAll(".card")[1].style.zIndex = "1";
        document.querySelectorAll(".card")[1].style.opacity = "100%";
        document.querySelector(".daniel").classList.remove("back");
        document.querySelectorAll(".card")[2].style.zIndex = "1";
        document.querySelectorAll(".card")[2].style.opacity = "100%";
        document.querySelector(".john").classList.remove("back");
        document.querySelectorAll(".card")[3].style.opacity = "100%";
        document.querySelectorAll(".card")[3].style.zIndex = "1";
        document.querySelector(".kayla").classList.remove("back");
        document.querySelectorAll(".card")[4].style.zIndex = "1";
        document.querySelectorAll(".card")[4].style.opacity = "100%";
        document.querySelector(".georgette").classList.remove("back");
    }
}

function daniel(){
    if(document.querySelectorAll(".div")[1].classList[1] === "daniel"){
        document.querySelectorAll(".div")[1].classList.add("daniel2");
        document.querySelectorAll(".div")[1].classList.remove("daniel");
        document.querySelectorAll("p")[1].classList.remove("message");
        document.querySelectorAll(".card")[0].style.zIndex = "-1";
        document.querySelectorAll(".card")[0].style.opacity = "0";
        document.querySelector(".miles").classList.add("back");
        document.querySelectorAll(".card")[2].style.zIndex = "-1";
        document.querySelectorAll(".card")[2].style.opacity = "0";
        document.querySelector(".john").classList.add("back");
        document.querySelectorAll(".card")[3].style.zIndex = "-1";
        document.querySelectorAll(".card")[3].style.opacity = "0";
        document.querySelector(".kayla").classList.add("back");
        document.querySelectorAll(".card")[4].style.zIndex = "-1";
        document.querySelectorAll(".card")[4].style.opacity = "0";
        document.querySelector(".georgette").classList.add("back");
    }else{
        document.querySelectorAll(".div")[1].classList.remove("daniel2");
        document.querySelectorAll(".div")[1].classList.add("daniel");
        document.querySelectorAll("p")[1].classList.add("message");
        document.querySelectorAll(".card")[0].style.zIndex = "1";
        document.querySelectorAll(".card")[0].style.opacity = "100%";
        document.querySelector(".miles").classList.remove("back");
        document.querySelectorAll(".card")[2].style.zIndex = "1";
        document.querySelectorAll(".card")[2].style.opacity = "100%";
        document.querySelector(".john").classList.remove("back");
        document.querySelectorAll(".card")[3].style.opacity = "100%";
        document.querySelectorAll(".card")[3].style.zIndex = "1";
        document.querySelector(".kayla").classList.remove("back");
        document.querySelectorAll(".card")[4].style.zIndex = "1";
        document.querySelectorAll(".card")[4].style.opacity = "100%";
        document.querySelector(".georgette").classList.remove("back");
    }
}

function john(){
    if(document.querySelectorAll(".div")[2].classList[1] === "john"){
        document.querySelectorAll(".div")[2].classList.add("john2");
        document.querySelectorAll(".div")[2].classList.remove("john");
        document.querySelectorAll("p")[2].classList.remove("message");
        document.querySelectorAll(".card")[0].style.zIndex = "-1";
        document.querySelectorAll(".card")[0].style.opacity = "0";
        document.querySelector(".miles").classList.add("back");
        document.querySelectorAll(".card")[1].style.zIndex = "-1";
        document.querySelectorAll(".card")[1].style.opacity = "0";
        document.querySelector(".daniel").classList.add("back");
        document.querySelectorAll(".card")[3].style.zIndex = "-1";
        document.querySelectorAll(".card")[3].style.opacity = "0";
        document.querySelector(".kayla").classList.add("back");
        document.querySelectorAll(".card")[4].style.zIndex = "-1";
        document.querySelectorAll(".card")[4].style.opacity = "0";
        document.querySelector(".georgette").classList.add("back");
    }else{
        document.querySelectorAll(".div")[2].classList.remove("john2");
        document.querySelectorAll(".div")[2].classList.add("john");
        document.querySelectorAll("p")[2].classList.add("message");
        document.querySelectorAll(".card")[0].style.zIndex = "1";
        document.querySelectorAll(".card")[0].style.opacity = "100%";
        document.querySelector(".miles").classList.remove("back");
        document.querySelectorAll(".card")[1].style.zIndex = "1";
        document.querySelectorAll(".card")[1].style.opacity = "100%";
        document.querySelector(".daniel").classList.remove("back");
        document.querySelectorAll(".card")[3].style.opacity = "100%";
        document.querySelectorAll(".card")[3].style.zIndex = "1";
        document.querySelector(".kayla").classList.remove("back");
        document.querySelectorAll(".card")[4].style.zIndex = "1";
        document.querySelectorAll(".card")[4].style.opacity = "100%";
        document.querySelector(".georgette").classList.remove("back");
    }
}

function kayla(){
    if(document.querySelectorAll(".div")[3].classList[1] === "kayla"){
        document.querySelectorAll(".div")[3].classList.add("kayla2");
        document.querySelectorAll(".div")[3].classList.remove("kayla");
        document.querySelectorAll("p")[3].classList.remove("message");
        document.querySelectorAll(".card")[0].style.zIndex = "-1";
        document.querySelectorAll(".card")[0].style.opacity = "0";
        document.querySelector(".miles").classList.add("back");
        document.querySelectorAll(".card")[1].style.zIndex = "-1";
        document.querySelectorAll(".card")[1].style.opacity = "0";
        document.querySelector(".daniel").classList.add("back");
        document.querySelectorAll(".card")[2].style.zIndex = "-1";
        document.querySelectorAll(".card")[2].style.opacity = "0";
        document.querySelector(".john").classList.add("back");
        document.querySelectorAll(".card")[4].style.zIndex = "-1";
        document.querySelectorAll(".card")[4].style.opacity = "0";
        document.querySelector(".georgette").classList.add("back");
    }else{
        document.querySelectorAll(".div")[3].classList.remove("kayla2");
        document.querySelectorAll(".div")[3].classList.add("kayla");
        document.querySelectorAll("p")[3].classList.add("message");
        document.querySelectorAll(".card")[0].style.zIndex = "1";
        document.querySelectorAll(".card")[0].style.opacity = "100%";
        document.querySelector(".miles").classList.remove("back");
        document.querySelectorAll(".card")[1].style.zIndex = "1";
        document.querySelectorAll(".card")[1].style.opacity = "100%";
        document.querySelector(".daniel").classList.remove("back");
        document.querySelectorAll(".card")[2].style.opacity = "100%";
        document.querySelectorAll(".card")[2].style.zIndex = "1";
        document.querySelector(".john").classList.remove("back");
        document.querySelectorAll(".card")[4].style.zIndex = "1";
        document.querySelectorAll(".card")[4].style.opacity = "100%";
        document.querySelector(".georgette").classList.remove("back");
    }
}

function georgette(){
    if(document.querySelectorAll(".div")[4].classList[1] === "georgette"){
        document.querySelectorAll(".div")[4].classList.add("georgette2");
        document.querySelectorAll(".div")[4].classList.remove("georgette");
        document.querySelectorAll("p")[4].classList.remove("message");
        document.querySelectorAll(".card")[0].style.zIndex = "-1";
        document.querySelectorAll(".card")[0].style.opacity = "0";
        document.querySelector(".miles").classList.add("back");
        document.querySelectorAll(".card")[1].style.zIndex = "-1";
        document.querySelectorAll(".card")[1].style.opacity = "0";
        document.querySelector(".daniel").classList.add("back");
        document.querySelectorAll(".card")[2].style.zIndex = "-1";
        document.querySelectorAll(".card")[2].style.opacity = "0";
        document.querySelector(".john").classList.add("back");
        document.querySelectorAll(".card")[3].style.zIndex = "-1";
        document.querySelectorAll(".card")[3].style.opacity = "0";
        document.querySelector(".kayla").classList.add("back");
    }else{
        document.querySelectorAll(".div")[4].classList.remove("georgette2");
        document.querySelectorAll(".div")[4].classList.add("georgette");
        document.querySelectorAll("p")[4].classList.add("message");
        document.querySelectorAll(".card")[0].style.zIndex = "1";
        document.querySelectorAll(".card")[0].style.opacity = "100%";
        document.querySelector(".miles").classList.remove("back");
        document.querySelectorAll(".card")[1].style.zIndex = "1";
        document.querySelectorAll(".card")[1].style.opacity = "100%";
        document.querySelector(".daniel").classList.remove("back");
        document.querySelectorAll(".card")[2].style.opacity = "100%";
        document.querySelectorAll(".card")[2].style.zIndex = "1";
        document.querySelector(".john").classList.remove("back");
        document.querySelectorAll(".card")[3].style.zIndex = "1";
        document.querySelectorAll(".card")[3].style.opacity = "100%";
        document.querySelector(".kayla").classList.remove("back");
    }
}