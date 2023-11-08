
fetch("https://date.nager.at/api/v3/publicholidays/2023/AT")
.then((response) => response.json())
.then((data)=>{
    document.getElementById("holiday").innerHTML = data.map(
        (post) =>
        `<div class="card mt-3">
            <div class="card-body">
                <h5 class="card-title text-center text-bg-success p-3">${post.name}</h5>
                <p class="card-text text-center">${post.date}</p>
            </div>
        </div>`
    ).join("");
})
.catch((err) =>{
    console.log("Error:",err);
});