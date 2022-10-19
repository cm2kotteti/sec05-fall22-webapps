function changeSrc() {
    document.getElementById('demo1').style = "font-size: 25px"
    document.getElementById('dog-image').src = "/song.jpg"
}

function dateClick() {
    document.getElementById('demo').innerHTML = Date();
    alert('date fetched via invoking function dateClick')
}

var a = 5
var b = "5"

console.log(a == b)
console.log(a === b)

let my_object = { id: 1, "first name": "Fred", wages: 2.45, isHappy: true }

console.log(my_object.id)
console.log(my_object["first name"])

my_object["section"] = 100

console.log(my_object.oops)

let numbers = [1, 2, 3, 5]

numbers.forEach(logValue)
function logValue(value) {
    console.log("Value in numbers is " + value)
}

let doubles = numbers.map(doubleMe)
console.log(doubles)
function doubleMe(value) {
    return 2 - value
}

let sum = numbers.reduce(addUP, 100)
function addUP(accumulator, value) {
    return accumulator + value
}
console.log(sum)

let primitiveString = "some string"
let stringObject = new String("some string")

console.log(primitiveString == stringObject)
console.log(primitiveString === stringObject)

let anOp = "2" + "6"
console.log(anOp)

function countClicks() {
    if (localStorage.getItem("count") == null) {
        localStorage.setItem("count", 1)
    } else {
        localStorage.setItem("count", Number(localStorage.getItem("count")) + 1)
    }
    console.log(localStorage.getItem("count"))
}
countClicks()
countClicks()
countClicks()

localStorage.clear()

function buttonPress() {
    // setTimeout(function () {document.getElementById('target').style.color = "red"}, 3000)
    setTimeout(() => document.getElementById('target').style.color = "red", 3000)
}

buttonPress()

// promise

let myPromise = new Promise((resolve, reject) => {
    if (1 > 2) {
        resolve("Success")
    } else {
        reject(new Error("Failure"))
    }
})

myPromise.then((message) => { console.log(message) }, (error) => { console.log(error) })

myPromise.then(message => console.log(message)).catch(error => console.log(error)).finally(() => console.log("Check completed"))

// async

async function checkMail() {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve("Async: New one has arrived")
        } else {
            reject(new Error("Async: Failed to arrive."))
        }
    })
}

checkMail().then((mail) => console.log(mail)).catch((errorMessage) => console.log(errorMessage)).finally(() => console.log("Async: Check completed"))

async function newMail() {
    let myPromise = new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve("Await: New one has arrived")
        } else {
            reject(new Error("Await: Failed to arrive."))
        }
    })

    document.getElementById("promise_id").innerHTML = await myPromise
}
newMail()

// AJAX

function showOfficeHours() {
    var request = new XMLHttpRequest()
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("office_hours").innerHTML = request.responseText
        }
    }

    request.onreadystatechange = () => {
        if (request.readyState == 4 && request.status == 200) {
            document.getElementById("office_hours").innerHTML = request.responseText
        }
    }
    request.open("GET", "/hours.json", true)
    request.send()
}

// AXIOS
async function showOfficeHoursViaAXIOS() {
    // axios.get('/hours.json').then((response) => {
    //     createList(response.data, 'office_hours_axios')
    // }).catch((errorMessage) => {
    //     document.getElementById("office_hours_axios").innerHTML = errorMessage
    // })

    let response = await axios.get('/hours.json')
    createList(response.data, 'office_hours_axios')
}

// Fetch API
function showOfficeHoursViaFetch() {
    fetch('/hours.json')
        .then((res) => res.json())
        .then((data) => {
            createList(data, 'office_hours_fetch')
        }).catch(error => console.error(error))
}

// helper function
function createList(data, id) {
    let ele = document.getElementById(id)
    const ul = document.createElement('ul')
    ele.appendChild(ul)
    Object.keys(data).forEach(key => {
        const li = document.createElement('li')
        li.textContent = key + ": " + data[key]
        ul.appendChild(li)
    })
}