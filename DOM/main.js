// const div = document.querySelectorAll(".links")


// const names =["Simon", "Onan", "KukuAli", "Kelvin", "Cynthia"]
// const test = document.querySelector(".test")
// names.map(name=>{
//     const p = document.createElement("p")
//     p.innerText="Hello" + name
//     test.appendChild(p)
// })

let form = document.getElementById('Form');

let formarray = []

form.addEventListener('submit', function(event){

    event.preventDefault()

    Name = document.getElementById('name').value
    Email = document.getElementById('email').value
    Password = document.getElementById('psw').value

    formarray.push(Name, Email, Password)

    //displaying the array at the bottom of the page
    document.getElementById('arrayData').innerHTML = formarray

    //displaying the array on the console
    console.log(formarray);
   
})



