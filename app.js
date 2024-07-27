
let input = document.querySelector("#input");


function submit() {
    let val = input.value;
    if (val === '') {
        alert("Write some task before press Enter:");
    } else {
        let task = document.querySelector(".task");
        let div = document.createElement("div");
        div.className = "list";
        let p = document.createElement("p");
        let b = document.createElement("button");
        b.className = "cancel";
        p.innerHTML = val;
        b.innerHTML = "&times";
        b.onclick = function () {
            task.removeChild(div);
        };
        div.append(p);
        div.append(b);
        task.prepend(div);
        input.value = ""
    }
}
