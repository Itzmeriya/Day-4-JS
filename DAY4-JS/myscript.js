function simple_interest()
{
var p,t,r,si;
p = document.getElementById ("first").value;
t = document.getElementById ("second").value;
r = document.getElementById ("third").value;
si = parseInt((p*t*r)/100 );
document.getElementById ('num').innerHTML ="Simple interest : "+si;
}


function colors(){
    const colors = ["red", "green", "blue","white","yellow"];
    document.getElementById("1").innerHTML=colors;
    colors.pop();
    document.getElementById("2").innerHTML=colors;
    colors.push("black");
    document.getElementById("3").innerHTML=colors;
    colors.shift();
    document.getElementById("4").innerHTML=colors;
    colors.unshift("darkgrey");
    document.getElementById("5").innerHTML=colors;
}
document.getElementById("6").innerHTML=colors();




            