const official={name:"Manu Desai,",designation:"CEO,",location:"Mumbai",empdetails:function details(){
    return this.name+""+this.designation+""+this.location;
}};
let data=official.empdetails();
document.getElementById("a1").innerHTML=data;
const o={name:"Amrutha S,",designation:"CCO,",location:"Chennai",bdetails:function details(){
    return this.name+""+this.designation+""+this.location;
}};
let d=o.bdetails();
document.getElementById("a2").innerHTML=d;
const c={name:"Balasubhramanyam,",designation:"CFO,",location:"Banglore",edetails:function details(){
    return this.name+""+this.designation+""+this.location;
}};
let r=c.edetails();
document.getElementById("a3").innerHTML=r;
const s={name:"Weiner Das,",designation:"Marketing Manager,",location:"Mumbai",tdetails:function details(){
    return this.name+""+this.designation+""+this.location;
}};
let u=s.tdetails();
document.getElementById("a4").innerHTML=u;
