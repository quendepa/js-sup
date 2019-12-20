document.getElementById("valider").addEventListener("click",()=>{
    conversionTemperature();

});
let conversionTemperature = () =>{
    nbr = prompt("1:Fin du programme 2:De Celsius vers Fahrenheit 3:De Celsius vers Kelvin  4:De Fahrenheit vers Celsius 5:De Fahrenheit vers Kelvin 6:De Kelvin vers Celsius 7:De Kelvin vers Fahrenheit");
    nbrOk= parseInt(nbr);

    nbr2= prompt("entrez une température à convertir");
    nbrOk2= parseInt(nbr2);

    switch (nbrok) {
        case 1:
            alert("au revoir");
        break;

        case 2:
         let F = ((nbrOk2) *9/5) + 32 ;
         
         alert (F);
        break;

        case 3:

        break;

        case 4:

        break;

        case 5:

        break;

        case 6:

        break;

        case 7:

        break;





        default:
}
}
