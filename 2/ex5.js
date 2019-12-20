let b = 2;
let a=1;
document.getElementById("valider").addEventListener("click",()=>{
alert("a=b++: "+(a=b++));
alert("a=++b: "+(a=++b));
alert("a=b--: "+(a=b--));
alert("a=--b: "+(a=--b));
alert("a+=b++:" +(a+=b++));
alert("a+=++b: "+ (a+=++b));
alert("a-=b++: "+(a-=b++));
alert ("a-=++b: "+(a-=++b));
alert("a+=b--: "+(a+=b--));
alert("a+=--b: "+(a+=--b));
});