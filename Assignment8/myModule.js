module.exports.isPrime = function(pnum){
    var f=0;    //here f we are taking is factors of pnum, initializing to zero

    for(var i = pnum-1; i > 1; i--) //checking if all the numbers between pnum-1 & 1 are factors
        if(pnum%i == 0){            //if they are factors f would increment
            f++;
            break;
        }
        return f==0;                //else f would be 0, and it returns true
}