"use strict" 

window.onload = () => {

const createInfoForm = document.querySelector("#informationForm");

createInfoForm.addEventListener("click", getInfo)


}


const getInfo = () => {
event.preventDefault ();

window.location.href = "./information.html"


localStorage.setItem("name", name);
localStorage.setItem("role", instructor)
localStorage.setItem("role", student)

//let valueFromLocalStorage = localStorage.getItem("name" , "instructor" , "student")

if (localStorage.getItem("role") === "instructor") {


    document.querySelector("#instructor").innerHTML += "Hi instructor," + localStorage.getItem("name")
} else {

    document.querySelector("#student").innerHTML += "Hi student," + localStorage.getItem("name")

}


}