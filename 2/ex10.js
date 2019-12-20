document.getElementById("valider").addEventListener("click",()=>{
    somme();

});

let somme = () =>{

    let nbr = prompt("entrez un nombre");
   let nbr1ok = parseInt(nbr1);
    
    let nbr2 = prompt("entrez un deuxième nombre");
   let nbr2ok = parseInt(nbr2);
   
    let nbr3 = prompt("entrez un troisième nombre");
    let nbr3ok =parseInt(nbr3);
    
    let addition=nbr1ok+nbr2ok+nbr3ok;
    alert(addition);

}