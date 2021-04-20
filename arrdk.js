var arrNew = [6,3,5,1,2,4];
var sum = 0;
for(var i = 0; i < arrNew.length; i++){
    sum = sum + arrNew[i];
    var prod = arrNew[i] * i;
    console.log("Num " + arrNew[i] + ", Sum " + sum);
    console.log("Value * Position is " + prod);
}
