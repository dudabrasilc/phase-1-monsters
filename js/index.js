fetch('http://localhost:3000/?_limit=20&_page=50')
.then(resp => resp.json())
.then(data => {
    console.log(data)
})
