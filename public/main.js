console.log("working client still")

function getAllBreeds() {
    $.get('https://evening-oasis-51166.herokuapp.com/', function(data) {
        // Console log the data to see what you get back and how to use it.
        console.log(data) // arr of objs
    })
}