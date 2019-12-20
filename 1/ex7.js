document.getElementById("valider").addEventListener('click',()=>{
let pointure = document.getElementById("pointure").value;
let age = document.getElementById("annee").value;
let ajout =((((pointure*2 )+5)*50)-age)+1776 ;
alert (ajout) ;
});


