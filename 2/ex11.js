document.getElementById("valider").addEventListener("click",()=>{
    calculMoyenne();

});
function calculMoyenne(){
   let  tabNbr=[];
   let nbr=0;
   let addition=  0;
   let compteur = 0 ;
    while (nbr >= 0){
        
         nbr = prompt('entrez un nombre');
         nbrok = parseInt(nbr);
           if (isNaN(nbrok)){
               alert("vous n avez pas rentré uh nombre");
            }else{
               tabNbr.push(nbrok);
               addition = addition + nbrok ;
               compteur = compteur + 1 ;
               
               console.log(tabNbr + addition + compteur);
            }
        if (nbr < 0 ){
        let moyenne = (+ addition/compteur);
        alert("moyenne des nombres entrés: "+ moyenne + " Nombres entrès: "+ compteur );
        }
         
    }
}