let tab = [-2,1,4]
document.getElementById("valider").addEventListener("click",()=>{
  for (let i = 0; i < tab.length; i++) {
    x= tab[i]
    soustrait(x)
    
}
 function soustrait(x) {
        alert (x - 2);
      }
      
});