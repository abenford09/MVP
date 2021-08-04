console.log("working client still, google font is in")

getAlldata()

async function getAlldata() {
    $.get('https://evening-oasis-51166.herokuapp.com/', function(data) {
        // Console log the data to see what you get back and how to use it.
        console.log(data) // arr of objs
    })
}