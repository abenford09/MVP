console.log("working client still, google font is in")

getAlldata()

async function getAlldata() {
    const res = await fetch('https://evening-oasis-51166.herokuapp.com/api/exercise')
    const data = await res.json()
    console.log(data)
    paintScreen(data)
}

function paintScreen(data) {
    for (let i = 0; i < data.length; i++) {
        let current = data[i]
        const div = document.createElement('div')
        div.textContent = current.name
        container.appendChild(div)
    }
}