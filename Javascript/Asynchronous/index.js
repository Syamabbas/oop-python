// function satu() {
//     console.log("Satu")
// }

// function dua() {
//     console.log("function loading")
//     setTimeout(() => {
//         console.log("dua")
//     }, 5000);
// }

// function tiga() {
//     console.log("Tiga")
// }

const  pictures = ["1.jpg", "2.jpg", "3.jpg"] 

function login(username, callback) {
    console.log('processing... memvalidasi data!')
    setTimeout(() => {
        callback({token, username})
    }, 200)
}

function getUser(token) {
    if(token) 
    setTimeout(() => {
        return {apikey: "xkey123"}
    }, 500)
}

function getPictures(apikey) {
    if(apikey) return pictures
}

login("username", function(response) {
    const {token} = response
    const apikey = getUser(token)
})
