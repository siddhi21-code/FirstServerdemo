const load = async () => {
    let res = await fetch(" http://localhost:3000")
    let data = await res.text()
    console.log(data)

}

load()