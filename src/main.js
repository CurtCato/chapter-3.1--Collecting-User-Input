console.log('POSTing for fun and profit');

const legoCreation = {
    id: 1,
    creator: "Per Sun",
    color: "Black",
    shape: "Animal",
    creation: "Black Cow"
}


document.querySelector(".saveBtn").addEventListener("click", event => {
    event.preventDefault()
    console.log("test")
    let creator = document.querySelector("#legoCreator").value
    let color = document.querySelector("#legoColor").value
    const legoToSave = {
        creator: creator,
        color: color,
        shape: "",
        creation: ""
    }
    console.log(legoToSave)
    fetch("http://localhost:8088/legos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(legoToSave)
    })
    .then( data => data.json())
    .then( response => console.log(response))
})

