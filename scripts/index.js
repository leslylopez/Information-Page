"use strict"

window.onload = () => {

    const createInfoForm = document.querySelector("#informationForm");

    createInfoForm.addEventListener("submit", getInfo)


}

const getInfo = (event) => {

    event.preventDefault();

    let nameInput = document.querySelector("#name").value;

    let role = document.querySelector('input[name="role"]:checked').value;


    localStorage.setItem("name", nameInput)
    localStorage.setItem("role", role)


    window.location.href = "./information.html"

}

