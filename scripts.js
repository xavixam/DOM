console.log(document.title);

const gen1 = document.getElementById("gen-1")
gen1.innerText = "Generasion 1 Pokimon"

const fondoGen1 = document.querySelector(".infocard-list")
fondoGen1.setAttribute("style", "background-color: red")

console.log(document.URL);

console.log(document.domain);

const images = document.querySelectorAll(".img-fixed")
console.log(images);

for (let i = 0; i < images.length; i++) {
    
    images[i].setAttribute("src", "https://media.giphy.com/media/2v170e71aanfi/giphy.gif")

}

const voladores = document.querySelectorAll(".flying")

for (let i = 0; i < voladores.length; i++) {
    
    voladores[i].parentElement.parentElement.parentElement.setAttribute("style", "background-color: blue")
    
}
