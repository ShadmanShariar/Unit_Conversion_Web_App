function cal(){

let a = document.getElementById("in1").value;
let b = document.getElementById("pos1").value;
let d = document.getElementById("pos2").value;

let aa = parseFloat(a);

if(b=="Meter" && d=="Meter"){
    let txt = a.toString();
    document.getElementById("in2").value = txt;

}
else if(b=="Meter" && d=="Kilometer"){
    a = a/1000;
    let txt = a.toString();
    document.getElementById("in2").value = txt;

}
else if(b=="Meter" && d=="Centimeter"){
    a = a*100;
    let txt = a.toString();
    document.getElementById("in2").value = txt;

}
else if(b=="Meter" && d=="Millimeter"){
    a = a*1000;
    let txt = a.toString();
    document.getElementById("in2").value = txt;

}
else if(b=="Meter" && d=="Micrometer"){
    a = a*1000000;
    let txt = a.toString();
    document.getElementById("in2").value = txt;

}
else if(b=="Meter" && d=="Nanometer"){
    a = a*1000000000;
    let txt = a.toString();
    document.getElementById("in2").value = txt;

}
else if(b=="Meter" && d=="Mile"){
    a = a/1609.34;
    let txt = a.toString();
    document.getElementById("in2").value = txt;

}
else if(b=="Meter" && d=="Yard"){
    a = a*1.09361;
    let txt = a.toString();
    document.getElementById("in2").value = txt;

}
else if(b=="Meter" && d=="Foot"){
    a = a*3.28;
    let txt = a.toString();
    document.getElementById("in2").value = txt;

}
else if(b=="Meter" && d=="Inch"){
    a = a*39.37;
    let txt = a.toString();
    document.getElementById("in2").value = txt;

}
else if(b=="Meter" && d=="Light Year"){
    a = a/9460730472580044;
    let txt = a.toString();
    document.getElementById("in2").value = txt;

}

//--------------------------------------------------
else if(b=="Kilometer" && d=="Kilometer"){
    let txt = a.toString();
    document.getElementById("in2").value = txt;

}
else if(b=="Kilometer" && d=="Meter"){
    a = a*1000;
    let txt = a.toString();
    document.getElementById("in2").value = txt;

}
else if(b=="Kilometer" && d=="Centimeter"){
    a = a*100000;
    let txt = a.toString();
    document.getElementById("in2").value = txt;

}
else if(b=="Kilometer" && d=="Millimeter"){
    a = a*1000;
    let txt = a.toString();
    document.getElementById("in2").value = txt;

}
else if(b=="Kilometer" && d=="Micrometer"){
    a = a*1000000;
    let txt = a.toString();
    document.getElementById("in2").value = txt;

}
else if(b=="Kilometer" && d=="Nanometer"){
    a = a*1000000000;
    let txt = a.toString();
    document.getElementById("in2").value = txt;

}
else if(b=="Kilometer" && d=="Mile"){
    a = a/1609.34;
    let txt = a.toString();
    document.getElementById("in2").value = txt;

}
else if(b=="Kilometer" && d=="Yard"){
    a = a*1.09361;
    let txt = a.toString();
    document.getElementById("in2").value = txt;

}
else if(b=="Kilometer" && d=="Foot"){
    a = a*3.28;
    let txt = a.toString();
    document.getElementById("in2").value = txt;

}
else if(b=="Kilometer" && d=="Inch"){
    a = a*39.37;
    let txt = a.toString();
    document.getElementById("in2").value = txt;

}
else if(b=="Kilometer" && d=="Light Year"){
    a = a/9460730472580044;
    let txt = a.toString();
    document.getElementById("in2").value = txt;

}

}