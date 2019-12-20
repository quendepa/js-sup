document.getElementById("valider").addEventListener("click",()=>{
let nbr1 = document.getElementById("premier_nombre").value;
let nbr2 = document.getElementById("deuxieme_nombre").value;
parseFloat(nbr1);
parseFloat(nbr2);
let result = nbr1.toFixed(0) * nbr2;
alert (result);
});