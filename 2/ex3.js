let a = 3;
let b = 2;


document.getElementById("valider").addEventListener("click",()=>{
    let nbr = prompt("Saisisez un nombre")*3;
    alert ("nbr*3: "+nbr);
    alert("a*nbr: "+a*nbr);
    alert("b*nbr: "+b*nbr);
});