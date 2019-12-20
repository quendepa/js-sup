
const surfaceRectanle = rectangle => {
    let largeur =  prompt("entrez une largeur");
    let longueur = prompt("entrez une longueur");
    longueur = parseInt(longueur);
    largeur = parseInt(largeur);
    rectangle = longueur * largeur ;
    alert("surface du rectangle: "+rectangle);
}
const periRectangle = rectangle2 => {
    let largeur =  prompt("entrez une largeur");
    let longueur = prompt("entrez une longueur");
    longueur = parseInt(longueur);
    largeur = parseInt(largeur);
    rectangle2 = (2*longueur)+(2*largeur);
    alert ("périmettre: "+rectangle2);

}
document.getElementById("valider").addEventListener("click",()=>{
    surfaceRectanle();
});

document.getElementById("valider2").addEventListener("click",()=>{
    periRectangle();
});

