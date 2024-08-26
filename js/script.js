// Ini JS

function replaceName(){
    let name = prompt("Siapakah nama anda?", "");
    document.getElementById("name").innerHTML = name
}

document.getElementById("tombol").addEventListener("click", function() {
    replaceName();
})