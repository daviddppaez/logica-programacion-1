console.log("Bienvenido al Console Log de Papitas Inc.");
let genTotalLikes = document.getElementById("genLikeCount");
let genSuperLikeDispo = document.getElementById("genSuperLikeCount");

function genClicLike() {
    genIncremento = parseInt(genTotalLikes.textContent);
    genIncremento++;
    genTotalLikes.textContent = genIncremento;
    alert("Gracias por tu like, ahora tenemos: " + genIncremento);
    console.log("Nuevo Like Registrado, conteo: " + genIncremento)
}

function genClicSuperLike() {
    if (parseInt(genSuperLikeDispo.textContent) !== 0) {
        genDispo = parseInt(genSuperLikeDispo.textContent);
        genDispo--;
        genSuperLikeDispo.textContent = genDispo;
        genIncremento = parseInt(genTotalLikes.textContent);
        genIncremento = genIncremento + 10;
        genTotalLikes.textContent = genIncremento;
        alert("Gracias por tu superlike, ahora tenemos: " + genIncremento);
        console.log("Nuevo Superlike Registrado, conteo: " + genIncremento)
    } else {
        alert("¡Se te agotaron los super likes, compra más!");
        console.log("Intento de Superlike fallido, conteo: " + genIncremento)
    }

}