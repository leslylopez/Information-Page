"use strict"

window.onload = () => {


const dataFromLocal = document.querySelector("#dataFromLocalStorage");
const loremIpsumText = document.querySelector("#loremIpsumText")

if ( localStorage.getItem("role") === "instructor") {

dataFromLocal.innerHTML = `Welcome, Instructor ${localStorage.getItem("name")}`;
loremIpsumText.innerHTML = `Welcome to our dedicated instructor page! We are thrilled to have you join our community of passionate educators. This platform is designed to support and enhance your teaching experience by providing a wealth of resources, tools, and collaborative opportunities. Whether you are preparing your curriculum, looking for innovative teaching strategies, or seeking to connect with fellow instructors, you'll find everything you need right here. Your expertise and enthusiasm are invaluable to us, and we are excited to support you in your journey to inspire and educate. Welcome aboard!`

}

if (localStorage.getItem("role")=== "student") {

    dataFromLocal.innerHTML = `Hi Student, ${localStorage.getItem("name")}`
    loremIpsumText.innerHTML = `Welcome to our student page! We are excited to have you join our vibrant community of learners. This platform is designed with your success in mind, offering a wealth of resources, tools, and opportunities to help you achieve your academic goals. Here, you can access study materials, connect with fellow students, and explore various learning aids tailored to enhance your educational journey. Whether you're seeking help with assignments, preparing for exams, or looking to expand your knowledge, you'll find everything you need right here. We're thrilled to support you every step of the way. Welcome, and happy learning!`
}

};