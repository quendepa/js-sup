document.getElementById("valider").addEventListener("click",()=>{
 testWhile();

});
let include = "non";
function testWhile() {
   while (include == "non"){
   let chaine= prompt ("saisisez une chaine de carctère avec un p à l'intérieure");
    lettre = 'p';
    include=(`${chaine.includes(lettre)? 'oui' : 'non'}`);
   if (include=="oui"){
       alert (chaine);
   }
   }
    
 }