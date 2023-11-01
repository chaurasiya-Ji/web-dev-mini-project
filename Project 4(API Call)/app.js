let url = "http://universities.hipolabs.com/search?name=india";
let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    // let country=document.querySelector("input").value;

    // console.log(country);
    let collarr = await getcolleges();
    console.log(collarr);

    show(collarr);
    
    document.querySelector("input").value = "";

})
function show(collarr) {
    let list = document.querySelector("#list");
    let State = document.querySelector("input").value;
    let h3= document.querySelector("#state");
    h3.innerText=  " - " + State.toUpperCase()+" - ";

    list.innerText = "";
    let find = true;

    for (col of collarr) {
        let str = col['state-province'];
        if (str == null) {
            str = "a";
        }

        console.log(str.toLowerCase());
        if (str.toLowerCase() === State.toLowerCase()) {
            let li = document.createElement("li");
            li.innerText = col.name;
            list.appendChild(li);
            find = false;

        }
    }
    if (find) {
        let li = document.createElement("li");
        li.innerText = "Can not find";
        list.appendChild(li);
    }
}

async function getcolleges() {
    try {
        let res = await axios.get(url);
        return res.data;

    } catch (e) {
        console.log("Error : ", e);
        return [];

    }
}