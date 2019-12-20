let date = new Date();

document.getElementById("valider").addEventListener("click",()=>{
    
    let jour=date.getDay();
    

    switch(jour){

    case 1: 
       alert ("nous sommes lundi");
    break;
    case 2:
       alert ("nous sommes mardi");
    break;

    case 3:
        alert ("nous sommes mercredi");
    break;

    case 4:
        alert ("nous sommes jeudi");
    break;

    case 5:
        alert ("nous sommes vendredi");
    break;

    case 6:
        alert ("nous sommes samedi");
    break;

    case 7:
        alert ("nous sommes dimanche");
    break;

    default:
       alert ("vous êtes sortis du continum espace temps");
    
  }
  
    



});