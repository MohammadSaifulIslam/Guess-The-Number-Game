var heading =document.querySelector("h1");
var attempt =document.querySelector("h3");
var num =document.querySelector("input");
var start =document.querySelector(".start");
var check =document.querySelector(".check");
var reload =document.querySelector(".reload");
var list =document.querySelector("ul");
var mainnumber
var count = 0
var attemptcount = 5


start.addEventListener("click",function(){
    if( num.value == ""){
        heading.innerHTML = "Please Enter A Number."
    }else if( num.value > 9){
        heading.innerHTML = "Please Enter A Number Less Than 9"
    }else{
        heading.innerHTML = "Guess The Number."
        mainnumber = num.value
        start.style.display ="none"
        check.style.display ="block"
        num.value = ""
        num.setAttribute("type", "number")
        attempt.innerHTML = "Attemp = 5"
    }
})

check.addEventListener("click", function(){
    count++
    attemptcount--
    if(mainnumber == num.value){
        heading.innerHTML = "Congratulations You Win The Game!"
         num.style.display ="none"
         check.style.display ="none"
         list.style.display ="none"
         reload.style.display ="block"
    }else if(num.value == ""){
        heading.innerHTML = "For Guess The Number, Please Enter a Number"
        count--
        attemptcount++
    }else{
        attempt.innerHTML = "Attempt = "+ attemptcount
        list.innerHTML += "<li>"+ num.value +"</li>"
        num.value = ""
        heading.innerHTML = "Guess The Number."
    }

    if(count == 5){
        heading.innerHTML ="Game Over"
        num.style.display ="none"
        check.style.display ="none"
        list.style.display ="none"
        reload.innerHTML = "Try again"
        reload.style.display ="block"
    }
    reload.addEventListener("click",function(){
        window.location.reload()
    })
})