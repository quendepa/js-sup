let tab = [-2,1,4]
document.getElementById("valider").addEventListener("click",()=>{
  for (let i = 0; i < tab.length; i++) {
    x= tab[i]
    additionne(x)
    
}
 function additionne(x) {
        alert (x * x);
      }
      
});