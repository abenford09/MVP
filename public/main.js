console.log("working client still, google font is in")

loadUp()

function loadUp() {
    createContainer()
    createbox()
    getAlldata()
    postData()
}

function createContainer() {
    var container = $('<div></div>')
    container.attr('id', 'container')
    $('body').append(container)
}

function createbox() {
    var box = $('<div></div>')
    box.attr('class', 'box')
    $('body').append(box)
        // console.log(box)
}


async function getAlldata() {
    const res = await fetch('https://evening-oasis-51166.herokuapp.com/api/exercise')
    const data = await res.json()
    console.log(data)
    postData(data)
}

// names of exercises
function postData(data) {
    for (let i = 0; i < data.length; i++) {
        let current = data[i]
        console.log(current)
        const div = document.createElement('div')
        div.textContent = Object.values(current)
        container.appendChild(div)
    }
}