document.getElementById("valider").addEventListener("click",()=>{
    let x = prompt("Saisisez un nombre entre 1 et 3");
    

    switch (x) {
    case "1": 
       alert ("merci");
    break;
    case "2":
       alert ("bonjour");
    break;

    case "3":
        alert ("au revoir");
    break;

    default:
       alert ("Pardon, que voulez-vous ?");
    
  }
  
});