const calculRayon = aire => {

    let rayon = prompt("entrez un rayon");
    aire = (2*rayon)*3.1416
    alert ("l'aire du cercle vaut: " +aire);
}
document.getElementById("valider").addEventListener("click",()=>{
    calculRayon();
});